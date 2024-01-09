package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class SimulationNest extends Simulation {

  val httpProtocol3000 = http
    .baseUrl("http://localhost:9999") // URL base para o teste na porta 8080

  val scn8080 = scenario("Test Nest JS - NGINX")
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

// class SimulationNode extends Simulation {

//   val httpProtocol8081 = http
//     .baseUrl("http://localhost:8081") // URL base para o teste na porta 8081

//   val scn8081 = scenario("Test on Port 8081")
//     .exec(http("node")
//     .get("/")) // Caminho do endpoint para o teste na porta 8081

//   setUp(
//     scn8081.inject(atOnceUsers(10000)) // Número de usuários simulados para o teste na porta 8081
//   ).protocols(httpProtocol8081)
// }