var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "27633",
        "ok": "26226",
        "ko": "1407"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "10055",
        "ok": "3159",
        "ko": "10055"
    },
    "meanResponseTime": {
        "total": "517",
        "ok": "8",
        "ko": "10004"
    },
    "standardDeviation": {
        "total": "2199",
        "ok": "84",
        "ko": "4"
    },
    "percentiles1": {
        "total": "2",
        "ok": "2",
        "ko": "10003"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "10004"
    },
    "percentiles3": {
        "total": "10002",
        "ok": "4",
        "ko": "10005"
    },
    "percentiles4": {
        "total": "10004",
        "ok": "6",
        "ko": "10022"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 26089,
    "percentage": 94
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 133,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1407,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "127.931",
        "ok": "121.417",
        "ko": "6.514"
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
        "total": "27633",
        "ok": "26226",
        "ko": "1407"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "10055",
        "ok": "3159",
        "ko": "10055"
    },
    "meanResponseTime": {
        "total": "517",
        "ok": "8",
        "ko": "10004"
    },
    "standardDeviation": {
        "total": "2199",
        "ok": "84",
        "ko": "4"
    },
    "percentiles1": {
        "total": "2",
        "ok": "2",
        "ko": "10003"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "10004"
    },
    "percentiles3": {
        "total": "10002",
        "ok": "4",
        "ko": "10005"
    },
    "percentiles4": {
        "total": "10004",
        "ok": "6",
        "ko": "10022"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 26089,
    "percentage": 94
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 133,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1407,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "127.931",
        "ok": "121.417",
        "ko": "6.514"
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
