package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class SimulationNest extends Simulation {

  val httpProtocol3000 = http
    .baseUrl("http://localhost:9999") // URL base para o teste na porta 8080

  val scn8080 = scenario("Test Nest JS - NGINX + GZIP")
    .exec(http("nest")
    .get("/dogs")) // Caminho do endpoint para o teste na porta 8080

  setUp(
    scn8080.inject(
      // constantUsersPerSec(2).during(10.seconds),
      constantUsersPerSec(500).during(20.seconds),
      // constantUsersPerSec(5).during(15.seconds).randomized,
      // rampUsersPerSec(6).to(300).during(3.minutes)

      // atOnceUsers(1000)
    ) // Número de usuários simulados para o teste na porta 8080
  ).protocols(httpProtocol3000)
}

class SimulationJwtPerformance extends Simulation {

  val httpProtocol3000 = http
    .baseUrl("http://localhost:9999") // URL base para o teste na porta 8080

  val withJwt = scenario("Test Nest JS with JWT")
    .exec(
      http("nest")
      .get("/auth/profile")
      .header("Cache-Control", "no-cache, no-store, must-revalidate")
      .header("Pragma", "no-cache")
      .header("Expires", "0")
      .header("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWRiZWZmZWFmMjAyODNjOGE1YzU0ZiIsInVzZXJuYW1lIjoicmljayIsImlhdCI6MTcwNDg0MDg0OSwiZXhwIjoxNzA3NDMyODQ5fQ.WwCqh4oVYzFFLz-FqiRGxnHKrpD96lhvrTirAOSbdm4")
      .check(status.is(200))
    );

  val withoutJwt = scenario("Test Nest JS without JWT")
    .exec(
      http("nest")
      .get("/auth/profile_unsecured")
      .header("Cache-Control", "no-cache, no-store, must-revalidate")
      .header("Pragma", "no-cache")
      .header("Expires", "0")
      .check(status.is(200))
    );

  setUp(
    // withJwt.inject(
    //   constantUsersPerSec(5).during(15.seconds).randomized,
    //   constantUsersPerSec(500).during(2.minutes),
    // ),
    withoutJwt.inject(
      constantUsersPerSec(5).during(15.seconds).randomized,
      constantUsersPerSec(500).during(2.minutes),
    )
  ).protocols(httpProtocol3000)
}