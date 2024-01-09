var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "249",
        "ok": "249",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3544",
        "ok": "3544",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1269",
        "ok": "1269",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "864",
        "ok": "864",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1310",
        "ok": "1310",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1592",
        "ok": "1592",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3467",
        "ok": "3467",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3516",
        "ok": "3516",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 442,
    "percentage": 44
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 557,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "250",
        "ko": "-"
    }
},
contents: {
"req_nest-99475": {
        type: "REQUEST",
        name: "nest",
path: "nest",
pathFormatted: "req_nest-99475",
stats: {
    "name": "nest",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "249",
        "ok": "249",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3544",
        "ok": "3544",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1269",
        "ok": "1269",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "864",
        "ok": "864",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1310",
        "ok": "1310",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1592",
        "ok": "1592",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3467",
        "ok": "3467",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3516",
        "ok": "3516",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 442,
    "percentage": 44
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 557,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "250",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
