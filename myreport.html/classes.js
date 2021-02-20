var classes = [
    {
        "name": "Pkgtools\\Phppear\\Command",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "runName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runDebianname",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runSummary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runDescription",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runMaintainers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runDebianversion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runLicense",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runPackagetype",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runSubstvars",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runChangelog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 14,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 14,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 22,
        "ccn": 9,
        "ccnMethodMax": 6,
        "externals": [
            "Pkgtools\\Base\\Command",
            "Pkgtools\\Phppear\\Source",
            "Pkgtools\\Phppear\\Source",
            "InvalidArgumentException",
            "Pkgtools\\Base\\Dependency",
            "Pkgtools\\Base\\Overrides",
            "Pkgtools\\Phppear\\Source",
            "Pkgtools\\Phppear\\Source",
            "Pkgtools\\Phppear\\Source",
            "Pkgtools\\Phppear\\Source",
            "Pkgtools\\Phppear\\Source",
            "Pkgtools\\Phppear\\Source",
            "Pkgtools\\Phppear\\Source",
            "Pkgtools\\Phppear\\Source",
            "Pkgtools\\Phppear\\Source",
            "Pkgtools\\Phppear\\Source",
            "Pkgtools\\Phppear\\Source",
            "Pkgtools\\Phppear\\Source",
            "Pkgtools\\Base\\Utils",
            "Pkgtools\\Phppear\\Source"
        ],
        "parents": [
            "Pkgtools\\Base\\Command"
        ],
        "lcom": 1,
        "length": 209,
        "vocabulary": 47,
        "volume": 1160.91,
        "difficulty": 19.86,
        "effort": 23061.3,
        "level": 0.05,
        "bugs": 0.39,
        "time": 1281,
        "intelligentContent": 58.44,
        "number_operators": 62,
        "number_operands": 147,
        "number_operators_unique": 10,
        "number_operands_unique": 37,
        "cloc": 58,
        "loc": 166,
        "lloc": 108,
        "mi": 72.62,
        "mIwoC": 32.97,
        "commentWeight": 39.65,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 196,
        "relativeDataComplexity": 0.15,
        "relativeSystemComplexity": 196.15,
        "totalStructuralComplexity": 2744,
        "totalDataComplexity": 2.07,
        "totalSystemComplexity": 2746.07,
        "package": "Pkgtools\\Phppear\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Pkgtools\\Phppear\\Source",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMaintainers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStability",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLicense",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNotes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackageType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasPhpScript",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "canonicVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getChangelog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "asDependency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 14,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 14,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 63,
        "ccn": 50,
        "ccnMethodMax": 21,
        "externals": [
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "Pkgtools\\Base\\Dependencies",
            "Pkgtools\\Base\\Dependency",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "Pkgtools\\Base\\Dependency",
            "Pkgtools\\Base\\Dependency",
            "Pkgtools\\Base\\Dependency"
        ],
        "parents": [],
        "lcom": 2,
        "length": 522,
        "vocabulary": 119,
        "volume": 3599.09,
        "difficulty": 18.89,
        "effort": 67999.57,
        "level": 0.05,
        "bugs": 1.2,
        "time": 3778,
        "intelligentContent": 190.49,
        "number_operators": 151,
        "number_operands": 371,
        "number_operators_unique": 11,
        "number_operands_unique": 108,
        "cloc": 85,
        "loc": 330,
        "lloc": 245,
        "mi": 51.64,
        "mIwoC": 16.26,
        "commentWeight": 35.39,
        "kanDefect": 4.63,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 1.95,
        "relativeSystemComplexity": 122.95,
        "totalStructuralComplexity": 1694,
        "totalDataComplexity": 27.33,
        "totalSystemComplexity": 1721.33,
        "package": "Pkgtools\\Phppear\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Pkgtools\\Phppearchannel\\Command",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "runName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runSummary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runSuggestedalias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runSubstvars",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Pkgtools\\Base\\Command",
            "Pkgtools\\Phppearchannel\\Source",
            "Pkgtools\\Phppearchannel\\Source",
            "Pkgtools\\Phppearchannel\\Source",
            "Pkgtools\\Phppearchannel\\Source",
            "Pkgtools\\Base\\Utils"
        ],
        "parents": [
            "Pkgtools\\Base\\Command"
        ],
        "lcom": 1,
        "length": 60,
        "vocabulary": 16,
        "volume": 240,
        "difficulty": 4.62,
        "effort": 1107.69,
        "level": 0.22,
        "bugs": 0.08,
        "time": 62,
        "intelligentContent": 52,
        "number_operators": 20,
        "number_operands": 40,
        "number_operators_unique": 3,
        "number_operands_unique": 13,
        "cloc": 20,
        "loc": 52,
        "lloc": 32,
        "mi": 91.35,
        "mIwoC": 50.37,
        "commentWeight": 40.98,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 16,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 16,
        "package": "Pkgtools\\Phppearchannel\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Pkgtools\\Phppearchannel\\Source",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 8,
        "ccnMethodMax": 5,
        "externals": [
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException"
        ],
        "parents": [],
        "lcom": 1,
        "length": 43,
        "vocabulary": 20,
        "volume": 185.84,
        "difficulty": 5.5,
        "effort": 1022.14,
        "level": 0.18,
        "bugs": 0.06,
        "time": 57,
        "intelligentContent": 33.79,
        "number_operators": 10,
        "number_operands": 33,
        "number_operators_unique": 5,
        "number_operands_unique": 15,
        "cloc": 34,
        "loc": 70,
        "lloc": 36,
        "mi": 93.18,
        "mIwoC": 49.09,
        "commentWeight": 44.09,
        "kanDefect": 0.81,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 4,
        "package": "Pkgtools\\Phppearchannel\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Pkgtools\\Phpcomposer\\Command",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "runName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runDescription",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runSubstvars",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "Pkgtools\\Base\\Command",
            "Pkgtools\\Phpcomposer\\Source",
            "Pkgtools\\Phpcomposer\\Source",
            "Pkgtools\\Phpcomposer\\Source",
            "Pkgtools\\Phpcomposer\\Source",
            "Pkgtools\\Base\\Utils"
        ],
        "parents": [
            "Pkgtools\\Base\\Command"
        ],
        "lcom": 1,
        "length": 59,
        "vocabulary": 22,
        "volume": 263.11,
        "difficulty": 6.32,
        "effort": 1663.76,
        "level": 0.16,
        "bugs": 0.09,
        "time": 92,
        "intelligentContent": 41.61,
        "number_operators": 16,
        "number_operands": 43,
        "number_operators_unique": 5,
        "number_operands_unique": 17,
        "cloc": 20,
        "loc": 53,
        "lloc": 33,
        "mi": 90.24,
        "mIwoC": 49.53,
        "commentWeight": 40.72,
        "kanDefect": 0.45,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 16,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 64,
        "package": "Pkgtools\\Phpcomposer\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Pkgtools\\Phpcomposer\\Source",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasPhpScript",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 48,
        "ccn": 45,
        "ccnMethodMax": 31,
        "externals": [
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "Pkgtools\\Base\\Dependencies",
            "Pkgtools\\Base\\Dependency",
            "Pkgtools\\Base\\Dependency",
            "Pkgtools\\Base\\Logger",
            "Pkgtools\\Base\\Dependency",
            "Pkgtools\\Base\\Logger",
            "Pkgtools\\Base\\Logger",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "Exception"
        ],
        "parents": [],
        "lcom": 1,
        "length": 460,
        "vocabulary": 117,
        "volume": 3160.37,
        "difficulty": 20.56,
        "effort": 64985.06,
        "level": 0.05,
        "bugs": 1.05,
        "time": 3610,
        "intelligentContent": 153.7,
        "number_operators": 131,
        "number_operands": 329,
        "number_operators_unique": 13,
        "number_operands_unique": 104,
        "cloc": 50,
        "loc": 239,
        "lloc": 189,
        "mi": 52.32,
        "mIwoC": 19.78,
        "commentWeight": 32.54,
        "kanDefect": 2.76,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.7,
        "relativeSystemComplexity": 16.7,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 2.8,
        "totalSystemComplexity": 66.8,
        "package": "Pkgtools\\Phpcomposer\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 5,
        "instability": 0.83,
        "violations": {}
    },
    {
        "name": "Pkgtools\\Base\\Dependency",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "debName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toDebVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "debDependency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 84,
        "ccn": 78,
        "ccnMethodMax": 29,
        "externals": [
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "Pkgtools\\Base\\Logger",
            "this",
            "this",
            "this",
            "this",
            "this"
        ],
        "parents": [],
        "lcom": 2,
        "length": 508,
        "vocabulary": 102,
        "volume": 3389.59,
        "difficulty": 16.84,
        "effort": 57076.36,
        "level": 0.06,
        "bugs": 1.13,
        "time": 3171,
        "intelligentContent": 201.3,
        "number_operators": 160,
        "number_operands": 348,
        "number_operators_unique": 9,
        "number_operands_unique": 93,
        "cloc": 117,
        "loc": 352,
        "lloc": 235,
        "mi": 52.02,
        "mIwoC": 13.07,
        "commentWeight": 38.95,
        "kanDefect": 3.47,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 7.36,
        "relativeSystemComplexity": 16.36,
        "totalStructuralComplexity": 63,
        "totalDataComplexity": 51.5,
        "totalSystemComplexity": 114.5,
        "package": "Pkgtools\\Base\\",
        "pageRank": 0,
        "afferentCoupling": 4,
        "efferentCoupling": 3,
        "instability": 0.43,
        "violations": {}
    },
    {
        "name": "Pkgtools\\Base\\Overrides",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadFile",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadFiles",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "override",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 20,
        "ccn": 16,
        "ccnMethodMax": 6,
        "externals": [
            "LogicException",
            "Pkgtools\\Base\\Override",
            "LogicException",
            "Pkgtools\\Base\\Logger",
            "Pkgtools\\Base\\Override",
            "LogicException",
            "LogicException"
        ],
        "parents": [],
        "lcom": 5,
        "length": 142,
        "vocabulary": 79,
        "volume": 895.14,
        "difficulty": 8.41,
        "effort": 7529.68,
        "level": 0.12,
        "bugs": 0.3,
        "time": 418,
        "intelligentContent": 106.41,
        "number_operators": 38,
        "number_operands": 104,
        "number_operators_unique": 11,
        "number_operands_unique": 68,
        "cloc": 48,
        "loc": 153,
        "lloc": 105,
        "mi": 71.23,
        "mIwoC": 33.09,
        "commentWeight": 38.14,
        "kanDefect": 1.7,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.9,
        "relativeSystemComplexity": 9.9,
        "totalStructuralComplexity": 45,
        "totalDataComplexity": 4.5,
        "totalSystemComplexity": 49.5,
        "package": "Pkgtools\\Base\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "Pkgtools\\Base\\Utils",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "substvar",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "LogicException"
        ],
        "parents": [],
        "lcom": 2,
        "length": 30,
        "vocabulary": 16,
        "volume": 120,
        "difficulty": 2.65,
        "effort": 318.46,
        "level": 0.38,
        "bugs": 0.04,
        "time": 18,
        "intelligentContent": 45.22,
        "number_operators": 7,
        "number_operands": 23,
        "number_operators_unique": 3,
        "number_operands_unique": 13,
        "cloc": 28,
        "loc": 45,
        "lloc": 17,
        "mi": 105.46,
        "mIwoC": 58.47,
        "commentWeight": 46.99,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 3,
        "package": "Pkgtools\\Base\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 1,
        "instability": 0.25,
        "violations": {}
    },
    {
        "name": "Pkgtools\\Base\\Override",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "override",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "Pkgtools\\Base\\Dependency"
        ],
        "parents": [],
        "lcom": 1,
        "length": 53,
        "vocabulary": 21,
        "volume": 232.79,
        "difficulty": 9.25,
        "effort": 2153.33,
        "level": 0.11,
        "bugs": 0.08,
        "time": 120,
        "intelligentContent": 25.17,
        "number_operators": 16,
        "number_operands": 37,
        "number_operators_unique": 7,
        "number_operands_unique": 14,
        "cloc": 36,
        "loc": 62,
        "lloc": 26,
        "mi": 98.26,
        "mIwoC": 52.02,
        "commentWeight": 46.24,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 4,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 8,
        "totalSystemComplexity": 8,
        "package": "Pkgtools\\Base\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Pkgtools\\Base\\Command",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addOption",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseArgs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProperty",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseDocComment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "help",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 47,
        "ccn": 40,
        "ccnMethodMax": 17,
        "externals": [
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "class",
            "Pkgtools\\Base\\Logger",
            "InvalidArgumentException",
            "Pkgtools\\Base\\Logger",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "ReflectionClass",
            "this",
            "SplFileInfo",
            "ReflectionClass",
            "this"
        ],
        "parents": [],
        "lcom": 2,
        "length": 395,
        "vocabulary": 92,
        "volume": 2576.81,
        "difficulty": 27.01,
        "effort": 69606.82,
        "level": 0.04,
        "bugs": 0.86,
        "time": 3867,
        "intelligentContent": 95.39,
        "number_operators": 94,
        "number_operands": 301,
        "number_operators_unique": 14,
        "number_operands_unique": 78,
        "cloc": 76,
        "loc": 270,
        "lloc": 194,
        "mi": 57.45,
        "mIwoC": 20.83,
        "commentWeight": 36.62,
        "kanDefect": 3.15,
        "relativeStructuralComplexity": 225,
        "relativeDataComplexity": 0.47,
        "relativeSystemComplexity": 225.47,
        "totalStructuralComplexity": 1800,
        "totalDataComplexity": 3.75,
        "totalSystemComplexity": 1803.75,
        "package": "Pkgtools\\Base\\",
        "pageRank": 0,
        "afferentCoupling": 4,
        "efferentCoupling": 6,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "Pkgtools\\Base\\Dependencies",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "asDeb",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 5,
        "ccnMethodMax": 4,
        "externals": [
            "ArrayObject",
            "Pkgtools\\Base\\Overrides",
            "Pkgtools\\Base\\Logger",
            "Pkgtools\\Base\\Logger"
        ],
        "parents": [
            "ArrayObject"
        ],
        "lcom": 2,
        "length": 42,
        "vocabulary": 14,
        "volume": 159.91,
        "difficulty": 8.33,
        "effort": 1332.57,
        "level": 0.12,
        "bugs": 0.05,
        "time": 74,
        "intelligentContent": 19.19,
        "number_operators": 12,
        "number_operands": 30,
        "number_operators_unique": 5,
        "number_operands_unique": 9,
        "cloc": 15,
        "loc": 45,
        "lloc": 30,
        "mi": 90.67,
        "mIwoC": 51.67,
        "commentWeight": 38.99,
        "kanDefect": 0.75,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 9.5,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 19,
        "package": "Pkgtools\\Base\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "Pkgtools\\Base\\Logger",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLevel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEffectiveLevel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "log",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "debug",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "info",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "warning",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "critical",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 11,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "LogicException"
        ],
        "parents": [],
        "lcom": 9,
        "length": 63,
        "vocabulary": 23,
        "volume": 284.98,
        "difficulty": 6.81,
        "effort": 1939.48,
        "level": 0.15,
        "bugs": 0.09,
        "time": 108,
        "intelligentContent": 41.88,
        "number_operators": 14,
        "number_operands": 49,
        "number_operators_unique": 5,
        "number_operands_unique": 18,
        "cloc": 65,
        "loc": 129,
        "lloc": 64,
        "mi": 87.56,
        "mIwoC": 43.01,
        "commentWeight": 44.55,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1.89,
        "relativeSystemComplexity": 1.89,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 17,
        "totalSystemComplexity": 17,
        "package": "Pkgtools\\Base\\",
        "pageRank": 0,
        "afferentCoupling": 6,
        "efferentCoupling": 1,
        "instability": 0.14,
        "violations": {}
    },
    {
        "name": "Pkgtools\\Command",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "addOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "increaseVerbosity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Pkgtools\\Base\\Command",
            "Pkgtools\\Base\\Logger",
            "Pkgtools\\Base\\Logger"
        ],
        "parents": [
            "Pkgtools\\Base\\Command"
        ],
        "lcom": 2,
        "length": 19,
        "vocabulary": 15,
        "volume": 74.23,
        "difficulty": 0.64,
        "effort": 47.72,
        "level": 1.56,
        "bugs": 0.02,
        "time": 3,
        "intelligentContent": 115.47,
        "number_operators": 1,
        "number_operands": 18,
        "number_operators_unique": 1,
        "number_operands_unique": 14,
        "cloc": 23,
        "loc": 39,
        "lloc": 16,
        "mi": 106.91,
        "mIwoC": 60.5,
        "commentWeight": 46.41,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 9,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 18,
        "package": "Pkgtools\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "XML_Util",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "apiVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "replaceEntities",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reverseEntities",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getXMLDeclaration",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDocTypeDeclaration",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "attributesToString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "collapseEmptyTags",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createTag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createTagFromArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createStartElement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createEndElement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createComment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createCDataSection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "splitQualifiedName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isValidName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "raiseError",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 16,
        "nbMethods": 16,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 16,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 87,
        "ccn": 72,
        "ccnMethodMax": 24,
        "externals": [
            "XML_Util",
            "XML_Util",
            "XML_Util",
            "XML_Util",
            "XML_Util",
            "XML_Util",
            "XML_Util",
            "XML_Util",
            "XML_Util",
            "XML_Util",
            "XML_Util",
            "XML_Util",
            "XML_Util",
            "XML_Util",
            "PEAR"
        ],
        "parents": [],
        "lcom": 16,
        "length": 660,
        "vocabulary": 122,
        "volume": 4574.29,
        "difficulty": 28.09,
        "effort": 128478.7,
        "level": 0.04,
        "bugs": 1.52,
        "time": 7138,
        "intelligentContent": 162.86,
        "number_operators": 189,
        "number_operands": 471,
        "number_operators_unique": 13,
        "number_operands_unique": 109,
        "cloc": 422,
        "loc": 689,
        "lloc": 267,
        "mi": 58.58,
        "mIwoC": 11.75,
        "commentWeight": 46.82,
        "kanDefect": 4.59,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 8.56,
        "relativeSystemComplexity": 17.56,
        "totalStructuralComplexity": 144,
        "totalDataComplexity": 137,
        "totalSystemComplexity": 281,
        "package": "  XML_Util\\",
        "pageRank": 0.02,
        "afferentCoupling": 3,
        "efferentCoupling": 3,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "System",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_parseArgs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "raiseError",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_dirToStruct",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_multipleToStruct",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mkDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mktemp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_removeTmpFiles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tmpdir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "which",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "find",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 12,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 119,
        "ccn": 108,
        "ccnMethodMax": 19,
        "externals": [
            "Console_Getopt",
            "PEAR",
            "System",
            "System",
            "System",
            "System",
            "PEAR",
            "System",
            "System",
            "System",
            "PEAR",
            "System",
            "System",
            "System",
            "System",
            "PEAR",
            "System",
            "System",
            "System",
            "System",
            "PEAR",
            "System",
            "System"
        ],
        "parents": [],
        "lcom": 12,
        "length": 780,
        "vocabulary": 141,
        "volume": 5568.85,
        "difficulty": 35.92,
        "effort": 200029.5,
        "level": 0.03,
        "bugs": 1.86,
        "time": 11113,
        "intelligentContent": 155.04,
        "number_operators": 256,
        "number_operands": 524,
        "number_operators_unique": 17,
        "number_operands_unique": 124,
        "cloc": 209,
        "loc": 575,
        "lloc": 366,
        "mi": 43.53,
        "mIwoC": 3.33,
        "commentWeight": 40.2,
        "kanDefect": 8.64,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 6.07,
        "relativeSystemComplexity": 22.07,
        "totalStructuralComplexity": 192,
        "totalDataComplexity": 72.8,
        "totalSystemComplexity": 264.8,
        "package": "   System\\",
        "pageRank": 0.02,
        "afferentCoupling": 17,
        "efferentCoupling": 4,
        "instability": 0.19,
        "violations": {}
    },
    {
        "name": "PEAR",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "PEAR",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_PEAR",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__call",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__callStatic",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStaticProperty",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "registerShutdownFunc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isError",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_setErrorHandling",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "expectError",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "popExpect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_checkDelExpect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delExpect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_raiseError",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_throwError",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "staticPushErrorHandling",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "staticPopErrorHandling",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_pushErrorHandling",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_popErrorHandling",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 20,
        "nbMethods": 20,
        "nbMethodsPrivate": 5,
        "nbMethodsPublic": 15,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 101,
        "ccn": 82,
        "ccnMethodMax": 19,
        "externals": [
            "PEAR",
            "PEAR",
            "PEAR",
            "ec",
            "ec",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [],
        "lcom": 15,
        "length": 549,
        "vocabulary": 89,
        "volume": 3555.18,
        "difficulty": 35.93,
        "effort": 127749.38,
        "level": 0.03,
        "bugs": 1.19,
        "time": 7097,
        "intelligentContent": 98.94,
        "number_operators": 164,
        "number_operands": 385,
        "number_operators_unique": 14,
        "number_operands_unique": 75,
        "cloc": 305,
        "loc": 632,
        "lloc": 327,
        "mi": 53.26,
        "mIwoC": 9.26,
        "commentWeight": 44.01,
        "kanDefect": 3.95,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 2.59,
        "relativeSystemComplexity": 83.59,
        "totalStructuralComplexity": 1620,
        "totalDataComplexity": 51.7,
        "totalSystemComplexity": 1671.7,
        "package": "   PEAR\\",
        "pageRank": 0.28,
        "afferentCoupling": 51,
        "efferentCoupling": 3,
        "instability": 0.06,
        "violations": {}
    },
    {
        "name": "PEAR_Error",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "PEAR_Error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMode",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCallback",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMessage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCode",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUserInfo",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDebugInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBacktrace",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUserInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 13,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 4,
        "nbMethodsSetters": 0,
        "wmc": 40,
        "ccn": 28,
        "ccnMethodMax": 18,
        "externals": [
            "PEAR"
        ],
        "parents": [],
        "lcom": 3,
        "length": 249,
        "vocabulary": 50,
        "volume": 1405.32,
        "difficulty": 20.25,
        "effort": 28457.73,
        "level": 0.05,
        "bugs": 0.47,
        "time": 1581,
        "intelligentContent": 69.4,
        "number_operators": 87,
        "number_operands": 162,
        "number_operators_unique": 10,
        "number_operands_unique": 40,
        "cloc": 104,
        "loc": 253,
        "lloc": 149,
        "mi": 68.68,
        "mIwoC": 26.79,
        "commentWeight": 41.89,
        "kanDefect": 1.69,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 2.78,
        "relativeSystemComplexity": 18.78,
        "totalStructuralComplexity": 208,
        "totalDataComplexity": 36.2,
        "totalSystemComplexity": 244.2,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Validator_PECL",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "validateVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validatePackageName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 6,
        "ccnMethodMax": 4,
        "externals": [
            "PEAR_Validate"
        ],
        "parents": [
            "PEAR_Validate"
        ],
        "lcom": 1,
        "length": 53,
        "vocabulary": 24,
        "volume": 243,
        "difficulty": 6.38,
        "effort": 1550.93,
        "level": 0.16,
        "bugs": 0.08,
        "time": 86,
        "intelligentContent": 38.07,
        "number_operators": 22,
        "number_operands": 31,
        "number_operators_unique": 7,
        "number_operands_unique": 17,
        "cloc": 11,
        "loc": 38,
        "lloc": 27,
        "mi": 88.28,
        "mIwoC": 51.27,
        "commentWeight": 37.01,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0.38,
        "relativeSystemComplexity": 49.38,
        "totalStructuralComplexity": 98,
        "totalDataComplexity": 0.75,
        "totalSystemComplexity": 98.75,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_ChannelFile_Parser",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "setConfig",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLogger",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "PEAR_XMLParser",
            "PEAR",
            "PEAR_ChannelFile"
        ],
        "parents": [
            "PEAR_XMLParser"
        ],
        "lcom": 1,
        "length": 33,
        "vocabulary": 11,
        "volume": 114.16,
        "difficulty": 5.06,
        "effort": 577.94,
        "level": 0.2,
        "bugs": 0.04,
        "time": 32,
        "intelligentContent": 22.55,
        "number_operators": 6,
        "number_operands": 27,
        "number_operators_unique": 3,
        "number_operands_unique": 8,
        "cloc": 12,
        "loc": 43,
        "lloc": 31,
        "mi": 89.16,
        "mIwoC": 52.66,
        "commentWeight": 36.5,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 0.37,
        "relativeSystemComplexity": 64.37,
        "totalStructuralComplexity": 192,
        "totalDataComplexity": 1.11,
        "totalSystemComplexity": 193.11,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_XMLParser",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getData",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startHandler",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "postProcess",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endHandler",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cdataHandler",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 25,
        "ccn": 20,
        "ccnMethodMax": 13,
        "externals": [
            "PEAR",
            "PEAR"
        ],
        "parents": [],
        "lcom": 1,
        "length": 241,
        "vocabulary": 51,
        "volume": 1367.05,
        "difficulty": 23.17,
        "effort": 31675.65,
        "level": 0.04,
        "bugs": 0.46,
        "time": 1760,
        "intelligentContent": 59,
        "number_operators": 51,
        "number_operands": 190,
        "number_operators_unique": 10,
        "number_operands_unique": 41,
        "cloc": 99,
        "loc": 211,
        "lloc": 112,
        "mi": 74.3,
        "mIwoC": 30.65,
        "commentWeight": 43.65,
        "kanDefect": 1.21,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 2.56,
        "relativeSystemComplexity": 6.56,
        "totalStructuralComplexity": 24,
        "totalDataComplexity": 15.33,
        "totalSystemComplexity": 39.33,
        "package": "  PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 6,
        "efferentCoupling": 1,
        "instability": 0.14,
        "violations": {}
    },
    {
        "name": "PEAR_Config",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultConfigFiles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "singleton",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validConfiguration",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "readConfigFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "readFTPConfigFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_setupChannels",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mergeConfigFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "arrayMergeRecursive",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "writeConfigFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_readConfigDataFrom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getConfFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addConfigVars",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_encodeOutput",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_decodeInput",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getChannelValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_lazyChannelSetup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setChannels",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDocs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPrompt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGroups",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGroupKeys",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSetValues",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getKeys",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeLayer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "store",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "definedBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDefined",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDefinedLayer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLayers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "apiVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRegistry",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRegistry",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "noRegistry",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getREST",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFTP",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_prependPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setInstallRoot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 45,
        "nbMethods": 45,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 45,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 311,
        "ccn": 267,
        "ccnMethodMax": 35,
        "externals": [
            "PEAR",
            "PEAR_Installer_Role",
            "PEAR_Registry",
            "PEAR_Config",
            "PEAR",
            "PEAR_Registry",
            "PEAR_Common",
            "PEAR",
            "PEAR_FTP",
            "PEAR",
            "System",
            "PEAR_Common",
            "PEAR",
            "PEAR_Common",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Config",
            "PEAR_Config",
            "PEAR_Registry",
            "PEAR_Config",
            "PEAR",
            "System",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Registry",
            "PEAR_Registry",
            "class",
            "PEAR_Registry"
        ],
        "parents": [
            "PEAR"
        ],
        "lcom": 6,
        "length": 2391,
        "vocabulary": 284,
        "volume": 19486.05,
        "difficulty": 42.33,
        "effort": 824921.24,
        "level": 0.02,
        "bugs": 6.5,
        "time": 45829,
        "intelligentContent": 460.29,
        "number_operators": 626,
        "number_operands": 1765,
        "number_operators_unique": 13,
        "number_operands_unique": 271,
        "cloc": 415,
        "loc": 1422,
        "lloc": 1007,
        "mi": 37.13,
        "mIwoC": 0,
        "commentWeight": 37.13,
        "kanDefect": 19.48,
        "relativeStructuralComplexity": 1225,
        "relativeDataComplexity": 3.82,
        "relativeSystemComplexity": 1228.82,
        "totalStructuralComplexity": 55125,
        "totalDataComplexity": 171.81,
        "totalSystemComplexity": 55296.81,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 11,
        "efferentCoupling": 9,
        "instability": 0.45,
        "violations": {}
    },
    {
        "name": "PEAR_ChannelFile",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getErrorMessage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromXmlString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromArrayWithErrors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fromArray",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getErrors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_unIndent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromXmlFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromAny",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_makeRestXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_makeMirrorsXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_makeFunctionsXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateError",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateWarning",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateFunctions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validChannelServer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getServer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPort",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSSL",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSummary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFunctions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFunction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "supports",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "supportsREST",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBaseURL",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetREST",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetFunctions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultPEARProtocols",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMirrors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMirror",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPort",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSSL",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setServer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSummary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setAlias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAlias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setValidationPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addFunction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addMirrorFunction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setBaseURL",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addMirror",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValidationPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValidationObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isIncludeable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lastModified",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 51,
        "nbMethods": 50,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 50,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 256,
        "ccn": 206,
        "ccnMethodMax": 29,
        "externals": [
            "PEAR_ErrorStack",
            "PEAR_XMLParser",
            "PEAR_ChannelFile",
            "PEAR_ChannelFile",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Validate",
            "vclass",
            "vclass",
            "PEAR_Validate"
        ],
        "parents": [],
        "lcom": 5,
        "length": 1996,
        "vocabulary": 173,
        "volume": 14839.52,
        "difficulty": 60.21,
        "effort": 893431.73,
        "level": 0.02,
        "bugs": 4.95,
        "time": 49635,
        "intelligentContent": 246.48,
        "number_operators": 514,
        "number_operands": 1482,
        "number_operators_unique": 13,
        "number_operands_unique": 160,
        "cloc": 304,
        "loc": 1165,
        "lloc": 862,
        "mi": 35.57,
        "mIwoC": 0,
        "commentWeight": 35.57,
        "kanDefect": 15.36,
        "relativeStructuralComplexity": 841,
        "relativeDataComplexity": 4.08,
        "relativeSystemComplexity": 845.08,
        "totalStructuralComplexity": 42891,
        "totalDataComplexity": 208.13,
        "totalSystemComplexity": 43099.13,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 6,
        "efferentCoupling": 7,
        "instability": 0.54,
        "violations": {}
    },
    {
        "name": "PEAR_ErrorStack",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "singleton",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_handleError",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultLogger",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLogger",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setMessageCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMessageCallback",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setContextCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pushCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "popCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "staticPushCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "staticPopCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "push",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "staticPush",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_log",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pop",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "staticPop",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasErrors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getErrors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "staticHasErrors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "staticGetErrors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_sortErrors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFileLine",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getErrorMessage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getErrorMessageTemplate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setErrorMessageTemplate",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "raiseError",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 28,
        "nbMethods": 26,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 26,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 1,
        "wmc": 119,
        "ccn": 92,
        "ccnMethodMax": 22,
        "externals": [
            "PEAR_ErrorStack",
            "stackClass",
            "PEAR_ErrorStack",
            "PEAR_ErrorStack"
        ],
        "parents": [],
        "lcom": 12,
        "length": 750,
        "vocabulary": 107,
        "volume": 5056.1,
        "difficulty": 38.1,
        "effort": 192642.8,
        "level": 0.03,
        "bugs": 1.69,
        "time": 10702,
        "intelligentContent": 132.7,
        "number_operators": 199,
        "number_operands": 551,
        "number_operators_unique": 13,
        "number_operands_unique": 94,
        "cloc": 371,
        "loc": 776,
        "lloc": 405,
        "mi": 48.7,
        "mIwoC": 4.81,
        "commentWeight": 43.89,
        "kanDefect": 6.28,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 2.23,
        "relativeSystemComplexity": 258.23,
        "totalStructuralComplexity": 7168,
        "totalDataComplexity": 62.35,
        "totalSystemComplexity": 7230.35,
        "package": "   PEAR_ErrorStack\\",
        "pageRank": 0.01,
        "afferentCoupling": 6,
        "efferentCoupling": 3,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "PEAR_Common",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_PEAR_Common",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addTempFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mkDirHier",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "log",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mkTempDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFrontendObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "betterStates",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUserRoles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getReleaseStates",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDependencyTypes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDependencyRelations",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFileRoles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getReplacementTypes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProvideTypes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getScriptPhases",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validPackageName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validPackageVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isIncludeable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_postProcessChecks",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "infoFromTgzFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "infoFromDescriptionFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "infoFromString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_postProcessValidPackagexml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "infoFromAny",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "xmlFromInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validatePackageInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildProvidesArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "analyzeSourceCode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "detectDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "downloadHttp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 31,
        "nbMethods": 31,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 31,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 84,
        "ccn": 54,
        "ccnMethodMax": 15,
        "externals": [
            "PEAR",
            "PEAR_Config",
            "System",
            "PEAR_Frontend",
            "System",
            "PEAR_Frontend",
            "System",
            "PEAR",
            "PEAR_PackageFile",
            "PEAR_PackageFile",
            "PEAR_PackageFile",
            "PEAR_PackageFile",
            "PEAR",
            "PEAR_Config",
            "PEAR_PackageFile",
            "PEAR_Config",
            "PEAR_PackageFile",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile_v2_Validator",
            "PEAR",
            "PEAR_Downloader"
        ],
        "parents": [
            "PEAR"
        ],
        "lcom": 18,
        "length": 614,
        "vocabulary": 151,
        "volume": 4444.38,
        "difficulty": 20.24,
        "effort": 89974.72,
        "level": 0.05,
        "bugs": 1.48,
        "time": 4999,
        "intelligentContent": 219.53,
        "number_operators": 145,
        "number_operands": 469,
        "number_operators_unique": 12,
        "number_operands_unique": 139,
        "cloc": 320,
        "loc": 640,
        "lloc": 320,
        "mi": 57,
        "mIwoC": 12.55,
        "commentWeight": 44.46,
        "kanDefect": 4.83,
        "relativeStructuralComplexity": 576,
        "relativeDataComplexity": 1.52,
        "relativeSystemComplexity": 577.52,
        "totalStructuralComplexity": 17856,
        "totalDataComplexity": 47.24,
        "totalSystemComplexity": 17903.24,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 11,
        "efferentCoupling": 7,
        "instability": 0.39,
        "violations": {}
    },
    {
        "name": "PEAR_Dependency2",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getExtraString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPHP_OS",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getsysname",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateOsDependency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "matchSignature",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateArchDependency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extension_loaded",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "phpversion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateExtensionDependency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validatePhpDependency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPEARVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validatePearinstallerDependency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateSubpackageDependency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validatePackageDependency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validatePackageDownload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validatePackageInstall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validatePackageUninstall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validatePackageUninstall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validatePackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateDependency1",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "normalizeDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "signOperator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "raiseError",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "warning",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 25,
        "nbMethods": 25,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 25,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 355,
        "ccn": 331,
        "ccnMethodMax": 82,
        "externals": [
            "PEAR_DependencyDB",
            "OS_Guess",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Downloader_Package",
            "PEAR_Downloader_Package",
            "PEAR",
            "PEAR_Dependency2",
            "PEAR",
            "PEAR",
            "PEAR_Dependency2",
            "PEAR"
        ],
        "parents": [],
        "lcom": 4,
        "length": 2645,
        "vocabulary": 234,
        "volume": 20817.11,
        "difficulty": 44.05,
        "effort": 916979.9,
        "level": 0.02,
        "bugs": 6.94,
        "time": 50943,
        "intelligentContent": 472.59,
        "number_operators": 859,
        "number_operands": 1786,
        "number_operators_unique": 11,
        "number_operands_unique": 223,
        "cloc": 139,
        "loc": 1048,
        "lloc": 909,
        "mi": 26.74,
        "mIwoC": 0,
        "commentWeight": 26.74,
        "kanDefect": 21.39,
        "relativeStructuralComplexity": 1521,
        "relativeDataComplexity": 3.37,
        "relativeSystemComplexity": 1524.37,
        "totalStructuralComplexity": 38025,
        "totalDataComplexity": 84.15,
        "totalSystemComplexity": 38109.15,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 7,
        "efferentCoupling": 6,
        "instability": 0.46,
        "violations": {}
    },
    {
        "name": "PEAR_PackageFile",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rawReturn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLogger",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parserFactory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClassPrefix",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "factory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromXmlString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addTempFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromTgzFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_extractErrors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromPackageFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromAnyFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 13,
        "nbMethods": 13,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 13,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 79,
        "ccn": 67,
        "ccnMethodMax": 24,
        "externals": [
            "class",
            "class",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_ErrorStack",
            "PEAR",
            "PEAR",
            "Archive_Tar",
            "PEAR",
            "PEAR",
            "PEAR",
            "System",
            "PEAR",
            "PEAR_PackageFile",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile",
            "PEAR",
            "PEAR_PackageFile",
            "PEAR_PackageFile",
            "PEAR_PackageFile",
            "PEAR",
            "PEAR_PackageFile",
            "PEAR_PackageFile",
            "PEAR_PackageFile",
            "PEAR_PackageFile",
            "PEAR"
        ],
        "parents": [],
        "lcom": 4,
        "length": 607,
        "vocabulary": 117,
        "volume": 4170.31,
        "difficulty": 22,
        "effort": 91746.85,
        "level": 0.05,
        "bugs": 1.39,
        "time": 5097,
        "intelligentContent": 189.56,
        "number_operators": 183,
        "number_operands": 424,
        "number_operators_unique": 11,
        "number_operands_unique": 106,
        "cloc": 124,
        "loc": 393,
        "lloc": 269,
        "mi": 50.86,
        "mIwoC": 12.64,
        "commentWeight": 38.22,
        "kanDefect": 3.87,
        "relativeStructuralComplexity": 484,
        "relativeDataComplexity": 1.32,
        "relativeSystemComplexity": 485.32,
        "totalStructuralComplexity": 6292,
        "totalDataComplexity": 17.22,
        "totalSystemComplexity": 6309.22,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 13,
        "efferentCoupling": 7,
        "instability": 0.35,
        "violations": {}
    },
    {
        "name": "PEAR_Validate",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_validPackageName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validPackageName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validGroupName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValidStates",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPackageFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addFailure",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addWarning",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFailures",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validatePackageName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateMaintainers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateStability",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateSummary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateDescription",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateLicense",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateNotes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateMainFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateReleaseFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateChangelog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateDeps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 29,
        "nbMethods": 29,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 29,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 103,
        "ccn": 75,
        "ccnMethodMax": 41,
        "externals": [
            "PEAR_Validate",
            "PEAR_Validate",
            "PEAR_Validate",
            "PEAR_Validate",
            "PEAR_Validate"
        ],
        "parents": [],
        "lcom": 6,
        "length": 813,
        "vocabulary": 124,
        "volume": 5653.76,
        "difficulty": 35.71,
        "effort": 201901.53,
        "level": 0.03,
        "bugs": 1.88,
        "time": 11217,
        "intelligentContent": 158.32,
        "number_operators": 294,
        "number_operands": 519,
        "number_operators_unique": 15,
        "number_operands_unique": 109,
        "cloc": 148,
        "loc": 505,
        "lloc": 357,
        "mi": 45.14,
        "mIwoC": 7.95,
        "commentWeight": 37.19,
        "kanDefect": 4.21,
        "relativeStructuralComplexity": 841,
        "relativeDataComplexity": 2.01,
        "relativeSystemComplexity": 843.01,
        "totalStructuralComplexity": 24389,
        "totalDataComplexity": 58.4,
        "totalSystemComplexity": 24447.4,
        "package": "   PEAR\\",
        "pageRank": 0.41,
        "afferentCoupling": 6,
        "efferentCoupling": 2,
        "instability": 0.25,
        "violations": {}
    },
    {
        "name": "PEAR_Exception",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addObserver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeObserver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUniqueId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "signal",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getErrorData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCause",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCauseMessage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTraceSafe",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getErrorClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getErrorMethod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toHtml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toText",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 13,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 66,
        "ccn": 53,
        "ccnMethodMax": 17,
        "externals": [
            "Exception",
            "PEAR_Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 5,
        "length": 493,
        "vocabulary": 94,
        "volume": 3231.41,
        "difficulty": 23.52,
        "effort": 76016.05,
        "level": 0.04,
        "bugs": 1.08,
        "time": 4223,
        "intelligentContent": 137.37,
        "number_operators": 138,
        "number_operands": 355,
        "number_operators_unique": 11,
        "number_operands_unique": 83,
        "cloc": 143,
        "loc": 336,
        "lloc": 193,
        "mi": 60.8,
        "mIwoC": 18.44,
        "commentWeight": 42.36,
        "kanDefect": 2.87,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 0.88,
        "relativeSystemComplexity": 121.88,
        "totalStructuralComplexity": 1694,
        "totalDataComplexity": 12.25,
        "totalSystemComplexity": 1706.25,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "PEAR_DependencyDB",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "singleton",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setConfig",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasWriteAccess",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertDepsDB",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDependentPackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDependentPackageDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dependsOn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_dependsOn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "installPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "uninstallPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rebuildDB",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_lock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_unlock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getDepDB",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_writeDepDB",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_setPackageDeps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_registerDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 18,
        "nbMethods": 18,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 18,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 140,
        "ccn": 123,
        "ccnMethodMax": 29,
        "externals": [
            "PEAR_DependencyDB",
            "PEAR",
            "PEAR_Config",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [],
        "lcom": 2,
        "length": 1090,
        "vocabulary": 95,
        "volume": 7161.14,
        "difficulty": 58.41,
        "effort": 418279.75,
        "level": 0.02,
        "bugs": 2.39,
        "time": 23238,
        "intelligentContent": 122.6,
        "number_operators": 282,
        "number_operands": 808,
        "number_operators_unique": 12,
        "number_operands_unique": 83,
        "cloc": 145,
        "loc": 634,
        "lloc": 489,
        "mi": 33.75,
        "mIwoC": 0,
        "commentWeight": 33.75,
        "kanDefect": 10.51,
        "relativeStructuralComplexity": 625,
        "relativeDataComplexity": 1.78,
        "relativeSystemComplexity": 626.78,
        "totalStructuralComplexity": 11250,
        "totalDataComplexity": 32.04,
        "totalSystemComplexity": 11282.04,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 5,
        "efferentCoupling": 4,
        "instability": 0.44,
        "violations": {}
    },
    {
        "name": "PEAR_Frontend",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "singleton",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFrontendClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFrontendObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isIncludeable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setConfig",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addTempFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "log",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runPostinstallScripts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "outputData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "userDialog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 24,
        "ccn": 15,
        "ccnMethodMax": 7,
        "externals": [
            "PEAR",
            "PEAR_Frontend",
            "PEAR_Frontend",
            "uiclass",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [
            "PEAR"
        ],
        "lcom": 10,
        "length": 136,
        "vocabulary": 39,
        "volume": 718.81,
        "difficulty": 8.55,
        "effort": 6142.6,
        "level": 0.12,
        "bugs": 0.24,
        "time": 341,
        "intelligentContent": 84.12,
        "number_operators": 42,
        "number_operands": 94,
        "number_operators_unique": 6,
        "number_operands_unique": 33,
        "cloc": 87,
        "loc": 171,
        "lloc": 84,
        "mi": 80.68,
        "mIwoC": 36,
        "commentWeight": 44.67,
        "kanDefect": 0.92,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 4.83,
        "relativeSystemComplexity": 8.83,
        "totalStructuralComplexity": 40,
        "totalDataComplexity": 48.33,
        "totalSystemComplexity": 88.33,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 8,
        "efferentCoupling": 4,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "PEAR_Installer",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setOptions",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setConfig",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_removeBackups",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_deletePackageFiles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_installFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_installFile2",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addFileOperation",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startFileTransaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "commitFileTransaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rollbackFileTransaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mkDirHier",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parsePackageXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDownloadedPackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUninstallPackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInstallPackages",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "install",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_compileSourceFiles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUninstallPackages",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "uninstall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sortPackagesForUninstall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_sortUninstall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_sortDirs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_buildCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 24,
        "nbMethods": 21,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 21,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 1,
        "wmc": 357,
        "ccn": 334,
        "ccnMethodMax": 91,
        "externals": [
            "PEAR_Downloader",
            "OS_Guess",
            "PEAR",
            "PEAR_Installer_Role",
            "PEAR_Installer_Role",
            "PEAR",
            "PEAR",
            "task",
            "PEAR",
            "PEAR_PackageFile",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "System",
            "Archive_Tar",
            "PEAR_Registry",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile",
            "PEAR",
            "System",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Task_Common",
            "PEAR_Task_Common",
            "PEAR_Builder",
            "PEAR",
            "PEAR",
            "PEAR_Dependency2",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_DependencyDB",
            "PEAR"
        ],
        "parents": [
            "PEAR_Downloader"
        ],
        "lcom": 2,
        "length": 3122,
        "vocabulary": 344,
        "volume": 26306.8,
        "difficulty": 57.15,
        "effort": 1503337.29,
        "level": 0.02,
        "bugs": 8.77,
        "time": 83519,
        "intelligentContent": 460.34,
        "number_operators": 779,
        "number_operands": 2343,
        "number_operators_unique": 16,
        "number_operands_unique": 328,
        "cloc": 286,
        "loc": 1504,
        "lloc": 1218,
        "mi": 31.27,
        "mIwoC": 0,
        "commentWeight": 31.27,
        "kanDefect": 22.22,
        "relativeStructuralComplexity": 7569,
        "relativeDataComplexity": 0.94,
        "relativeSystemComplexity": 7569.94,
        "totalStructuralComplexity": 181656,
        "totalDataComplexity": 22.5,
        "totalSystemComplexity": 181678.5,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 13,
        "instability": 0.87,
        "violations": {}
    },
    {
        "name": "PEAR_Frontend_CLI",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "displayError",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "displayFatalError",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "skipParamgroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runPostinstallScripts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runInstallScript",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "confirmDialog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "userDialog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "userConfirm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "outputData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "log",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bold",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_displayHeading",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_startTable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_tableRow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_endTable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_displayLine",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_display",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 18,
        "nbMethods": 18,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 18,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 172,
        "ccn": 155,
        "ccnMethodMax": 39,
        "externals": [
            "PEAR_Frontend",
            "PEAR_Config",
            "PEAR_Config"
        ],
        "parents": [
            "PEAR_Frontend"
        ],
        "lcom": 1,
        "length": 1385,
        "vocabulary": 232,
        "volume": 10883.3,
        "difficulty": 44.45,
        "effort": 483798.45,
        "level": 0.02,
        "bugs": 3.63,
        "time": 26878,
        "intelligentContent": 244.83,
        "number_operators": 328,
        "number_operands": 1057,
        "number_operators_unique": 18,
        "number_operands_unique": 214,
        "cloc": 54,
        "loc": 605,
        "lloc": 551,
        "mi": 22.32,
        "mIwoC": 0,
        "commentWeight": 22.32,
        "kanDefect": 11.27,
        "relativeStructuralComplexity": 400,
        "relativeDataComplexity": 1.02,
        "relativeSystemComplexity": 401.02,
        "totalStructuralComplexity": 7200,
        "totalDataComplexity": 18.38,
        "totalSystemComplexity": 7218.38,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Downloader",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "discover",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "newDownloaderPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDependency2Object",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "download",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "analyzeDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDownloadDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDownloadDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configSet",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setOptions",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOptions",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getPackageDownloadUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getDepPackageDownloadUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackageDownloadUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDownloadedPackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_downloadCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_prependPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pushError",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getErrorMsgs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sortPkgDeps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sortPackagesForInstall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_detectDepCycle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_testCycle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_setupGraph",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_dependsOn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_checkDepTree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_sortInstall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_downloadHttp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 28,
        "nbMethods": 26,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 26,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 1,
        "wmc": 392,
        "ccn": 365,
        "ccnMethodMax": 74,
        "externals": [
            "PEAR_Common",
            "PEAR",
            "System",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_ChannelFile",
            "PEAR_Downloader_Package",
            "PEAR_Dependency2",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Downloader_Package",
            "PEAR",
            "PEAR_Downloader_Package",
            "PEAR_Downloader_Package",
            "PEAR_Downloader_Package",
            "PEAR_Downloader_Package",
            "PEAR_Downloader_Package",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Downloader_Package",
            "PEAR",
            "PEAR_Downloader_Package",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Downloader_Package",
            "PEAR",
            "System",
            "PEAR",
            "System",
            "PEAR",
            "PEAR",
            "System",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile_v2",
            "PEAR_PackageFile_v1",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile_v2",
            "PEAR_PackageFile_v1",
            "PEAR",
            "Structures_Graph",
            "Structures_Graph_Node",
            "Structures_Graph_Manipulator_TopologicalSorter",
            "PEAR",
            "PEAR",
            "PEAR_Config",
            "PEAR_Proxy",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "static",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [
            "PEAR_Common"
        ],
        "lcom": 2,
        "length": 2801,
        "vocabulary": 348,
        "volume": 23648.68,
        "difficulty": 58.59,
        "effort": 1385532.59,
        "level": 0.02,
        "bugs": 7.88,
        "time": 76974,
        "intelligentContent": 403.64,
        "number_operators": 772,
        "number_operands": 2029,
        "number_operators_unique": 19,
        "number_operands_unique": 329,
        "cloc": 262,
        "loc": 1452,
        "lloc": 1190,
        "mi": 30.58,
        "mIwoC": 0,
        "commentWeight": 30.58,
        "kanDefect": 25.58,
        "relativeStructuralComplexity": 6241,
        "relativeDataComplexity": 1.03,
        "relativeSystemComplexity": 6242.03,
        "totalStructuralComplexity": 174748,
        "totalDataComplexity": 28.73,
        "totalSystemComplexity": 174776.73,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 6,
        "efferentCoupling": 14,
        "instability": 0.7,
        "violations": {}
    },
    {
        "name": "PEAR_Downloader_Package",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "download",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackageFile",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDownloader",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getType",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromDepURL",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "detectDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setValidated",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "alreadyValidated",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeInstalled",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_detect2",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_detect2Dep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_detect1",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDownloadURL",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPackageFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getShortName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getParsedPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDownloadURL",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "canDefault",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isSubpackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackageType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isBundle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackageXmlVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getURI",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isCompatible",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDeps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isEqual",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isInstalled",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "detectStupidDuplicates",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeDuplicates",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "explicitState",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setExplicitState",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mergeDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "willDownload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackagefileObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fromFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fromUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fromString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_analyzeDownloadURL",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 46,
        "nbMethods": 38,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 38,
        "nbMethodsGetter": 6,
        "nbMethodsSetters": 2,
        "wmc": 437,
        "ccn": 392,
        "ccnMethodMax": 52,
        "externals": [
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Downloader_Package",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Downloader_Package",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Downloader_Package",
            "PEAR_PackageFile_v1",
            "PEAR",
            "PEAR",
            "PEAR_Dependency2",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Dependency2",
            "PEAR",
            "PEAR_Downloader_Package",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Downloader_Package",
            "PEAR_Downloader_Package",
            "PEAR_Downloader_Package",
            "PEAR_Downloader_Package",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "Archive_Tar",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Downloader_Package",
            "PEAR",
            "PEAR",
            "PEAR_Common",
            "PEAR_Dependency2",
            "PEAR",
            "PEAR_Common",
            "PEAR_Dependency2",
            "PEAR",
            "PEAR_Common",
            "PEAR"
        ],
        "parents": [],
        "lcom": 6,
        "length": 3303,
        "vocabulary": 258,
        "volume": 26461.08,
        "difficulty": 65.55,
        "effort": 1734610.79,
        "level": 0.02,
        "bugs": 8.82,
        "time": 96367,
        "intelligentContent": 403.66,
        "number_operators": 1018,
        "number_operands": 2285,
        "number_operators_unique": 14,
        "number_operands_unique": 244,
        "cloc": 227,
        "loc": 1541,
        "lloc": 1314,
        "mi": 28.01,
        "mIwoC": 0,
        "commentWeight": 28.01,
        "kanDefect": 25.21,
        "relativeStructuralComplexity": 3844,
        "relativeDataComplexity": 2.02,
        "relativeSystemComplexity": 3846.02,
        "totalStructuralComplexity": 176824,
        "totalDataComplexity": 92.73,
        "totalSystemComplexity": 176916.73,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 4,
        "efferentCoupling": 8,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "PEAR_Builder",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_build_win32",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "msdevCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_harvestInstDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "build",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "phpizeCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_runCommand",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "log",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 85,
        "ccn": 78,
        "ccnMethodMax": 41,
        "externals": [
            "PEAR_Common",
            "PEAR_PackageFile",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile",
            "PEAR",
            "PEAR",
            "System",
            "System",
            "System",
            "System",
            "System",
            "PEAR"
        ],
        "parents": [
            "PEAR_Common"
        ],
        "lcom": 2,
        "length": 809,
        "vocabulary": 173,
        "volume": 6014.61,
        "difficulty": 21.06,
        "effort": 126643.12,
        "level": 0.05,
        "bugs": 2,
        "time": 7036,
        "intelligentContent": 285.65,
        "number_operators": 244,
        "number_operands": 565,
        "number_operators_unique": 12,
        "number_operands_unique": 161,
        "cloc": 106,
        "loc": 390,
        "lloc": 284,
        "mi": 45.66,
        "mIwoC": 9.53,
        "commentWeight": 36.13,
        "kanDefect": 4.87,
        "relativeStructuralComplexity": 361,
        "relativeDataComplexity": 1.61,
        "relativeSystemComplexity": 362.61,
        "totalStructuralComplexity": 2888,
        "totalDataComplexity": 12.85,
        "totalSystemComplexity": 2900.85,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 4,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "PEAR_REST_10",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDownloadURL",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDepDownloadURL",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_returnDownloadURL",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listPackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listCategories",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listCategory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listLatestUpgrades",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "packageInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "betterStates",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_sortReleasesByVersionNumber",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 12,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 211,
        "ccn": 200,
        "ccnMethodMax": 57,
        "externals": [
            "PEAR_REST",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Frontend",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile_v2",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile_v2",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [],
        "lcom": 2,
        "length": 1719,
        "vocabulary": 184,
        "volume": 12933,
        "difficulty": 57.67,
        "effort": 745803.17,
        "level": 0.02,
        "bugs": 4.31,
        "time": 41434,
        "intelligentContent": 224.27,
        "number_operators": 508,
        "number_operands": 1211,
        "number_operators_unique": 16,
        "number_operands_unique": 168,
        "cloc": 105,
        "loc": 709,
        "lloc": 604,
        "mi": 28.07,
        "mIwoC": 0,
        "commentWeight": 28.07,
        "kanDefect": 12.27,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 3.38,
        "relativeSystemComplexity": 147.38,
        "totalStructuralComplexity": 1728,
        "totalDataComplexity": 40.54,
        "totalSystemComplexity": 1768.54,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 4,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "PEAR_REST_11",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listCategories",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listCategory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "betterStates",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 73,
        "ccn": 69,
        "ccnMethodMax": 50,
        "externals": [
            "PEAR_REST",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile_v2",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [],
        "lcom": 2,
        "length": 516,
        "vocabulary": 78,
        "volume": 3243.27,
        "difficulty": 30.29,
        "effort": 98241.96,
        "level": 0.03,
        "bugs": 1.08,
        "time": 5458,
        "intelligentContent": 107.07,
        "number_operators": 147,
        "number_operands": 369,
        "number_operators_unique": 11,
        "number_operands_unique": 67,
        "cloc": 48,
        "loc": 263,
        "lloc": 215,
        "mi": 45.98,
        "mIwoC": 15.26,
        "commentWeight": 30.73,
        "kanDefect": 4.68,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 3.24,
        "relativeSystemComplexity": 19.24,
        "totalStructuralComplexity": 80,
        "totalDataComplexity": 16.2,
        "totalSystemComplexity": 96.2,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_REST_13",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getDownloadURL",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDepDownloadURL",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listLatestUpgrades",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 101,
        "ccn": 99,
        "ccnMethodMax": 53,
        "externals": [
            "PEAR_REST_10",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [
            "PEAR_REST_10"
        ],
        "lcom": 1,
        "length": 695,
        "vocabulary": 82,
        "volume": 4418.5,
        "difficulty": 30.33,
        "effort": 134007.62,
        "level": 0.03,
        "bugs": 1.47,
        "time": 7445,
        "intelligentContent": 145.69,
        "number_operators": 203,
        "number_operands": 492,
        "number_operators_unique": 9,
        "number_operands_unique": 73,
        "cloc": 65,
        "loc": 323,
        "lloc": 258,
        "mi": 40.57,
        "mIwoC": 8.55,
        "commentWeight": 32.02,
        "kanDefect": 5.16,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 2.67,
        "relativeSystemComplexity": 38.67,
        "totalStructuralComplexity": 108,
        "totalDataComplexity": 8,
        "totalSystemComplexity": 116,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Registry",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setInstallDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasWriteAccess",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setConfig",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_initializeChannelDirs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_initializeDirs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_initializeDepDB",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_PEAR_Registry",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_assertStateDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_assertChannelStateDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_assertChannelDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_packageFileName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_channelFileName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getChannelAliasFileName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getChannelFromAlias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getAlias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_channelDirectoryName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_openPackageFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_closePackageFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_openChannelFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_closeChannelFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_rebuildFileMap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_readFileMap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_lock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_unlock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_packageExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_channelExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_mirrorExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_deleteChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_isChannelAlias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_packageInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_channelInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_listChannels",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_listPackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_listChannelPackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_listAllPackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addPackage2",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_updatePackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_updatePackage2",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "packageExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "channelExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mirrorExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isAlias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "packageInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "channelInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "channelName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "channelAlias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listPackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listAllPackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listChannels",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPackage2",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deletePackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updatePackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updatePackage2",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInstalledGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getChannelValidator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getChannels",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "checkFileMap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flushFileMap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "apiVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parsePackageName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parsedPackageNameToString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 72,
        "nbMethods": 72,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 72,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 464,
        "ccn": 393,
        "ccnMethodMax": 38,
        "externals": [
            "PEAR",
            "PEAR_ChannelFile",
            "PEAR_ChannelFile",
            "PEAR_ChannelFile",
            "PEAR_ChannelFile",
            "PEAR_Config",
            "PEAR_DependencyDB",
            "PEAR",
            "PEAR_DependencyDB",
            "PEAR",
            "System",
            "System",
            "System",
            "System",
            "PEAR",
            "PEAR_Installer_Role",
            "PEAR_Installer_Role",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Frontend",
            "PEAR_Config",
            "PEAR_PackageFile",
            "PEAR_ChannelFile",
            "PEAR",
            "PEAR_ChannelFile",
            "PEAR_ChannelFile",
            "PEAR_ChannelFile",
            "PEAR_ChannelFile",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile_v1",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile_v1",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Installer_Role",
            "PEAR_Installer_Role",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Validate",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [
            "PEAR"
        ],
        "lcom": 2,
        "length": 3281,
        "vocabulary": 263,
        "volume": 26375.69,
        "difficulty": 71.13,
        "effort": 1875984.53,
        "level": 0.01,
        "bugs": 8.79,
        "time": 104221,
        "intelligentContent": 370.83,
        "number_operators": 1085,
        "number_operands": 2196,
        "number_operators_unique": 16,
        "number_operands_unique": 247,
        "cloc": 433,
        "loc": 2028,
        "lloc": 1595,
        "mi": 32.81,
        "mIwoC": 0,
        "commentWeight": 32.81,
        "kanDefect": 25.81,
        "relativeStructuralComplexity": 8464,
        "relativeDataComplexity": 2.5,
        "relativeSystemComplexity": 8466.5,
        "totalStructuralComplexity": 609408,
        "totalDataComplexity": 179.9,
        "totalSystemComplexity": 609587.9,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 10,
        "instability": 0.77,
        "violations": {}
    },
    {
        "name": "PEAR_REST",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "retrieveCacheFirst",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "retrieveData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useLocalCache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCacheId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "saveCache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "saveCacheFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "downloadHttp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 95,
        "ccn": 87,
        "ccnMethodMax": 40,
        "externals": [
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_XMLParser",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_XMLParser",
            "PEAR",
            "PEAR",
            "PEAR",
            "System",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Proxy",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [],
        "lcom": 1,
        "length": 839,
        "vocabulary": 160,
        "volume": 6143.1,
        "difficulty": 34.12,
        "effort": 209595.62,
        "level": 0.03,
        "bugs": 2.05,
        "time": 11644,
        "intelligentContent": 180.05,
        "number_operators": 265,
        "number_operands": 574,
        "number_operators_unique": 17,
        "number_operands_unique": 143,
        "cloc": 73,
        "loc": 378,
        "lloc": 305,
        "mi": 39.05,
        "mIwoC": 7.58,
        "commentWeight": 31.47,
        "kanDefect": 4.68,
        "relativeStructuralComplexity": 289,
        "relativeDataComplexity": 2.32,
        "relativeSystemComplexity": 291.32,
        "totalStructuralComplexity": 2601,
        "totalDataComplexity": 20.89,
        "totalSystemComplexity": 2621.89,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 4,
        "instability": 0.57,
        "violations": {}
    },
    {
        "name": "PEAR_Command_Install",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDownloader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInstaller",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "enableExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "disableExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parseIni",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doInstall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doUpgradeAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doUninstall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doBundle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doRunScripts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_filterUptodatePackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 12,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 218,
        "ccn": 207,
        "ccnMethodMax": 84,
        "externals": [
            "PEAR_Command_Common",
            "PEAR_Downloader",
            "PEAR_Installer",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Registry",
            "PEAR",
            "PEAR_PackageFile",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "System",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "Archive_Tar",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [
            "PEAR_Command_Common"
        ],
        "lcom": 2,
        "length": 2132,
        "vocabulary": 326,
        "volume": 17799.49,
        "difficulty": 35.61,
        "effort": 633764.48,
        "level": 0.03,
        "bugs": 5.93,
        "time": 35209,
        "intelligentContent": 499.9,
        "number_operators": 545,
        "number_operands": 1587,
        "number_operators_unique": 14,
        "number_operands_unique": 312,
        "cloc": 83,
        "loc": 871,
        "lloc": 778,
        "mi": 23.01,
        "mIwoC": 0,
        "commentWeight": 23.01,
        "kanDefect": 15.05,
        "relativeStructuralComplexity": 4356,
        "relativeDataComplexity": 0.66,
        "relativeSystemComplexity": 4356.66,
        "totalStructuralComplexity": 52272,
        "totalDataComplexity": 7.94,
        "totalSystemComplexity": 52279.94,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 8,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Command_Remote",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_checkChannelForStatus",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doRemoteInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doRemoteList",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doListAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doSearch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDownloader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doDownload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "downloadCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doListUpgrades",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doClearCache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 11,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 11,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 145,
        "ccn": 135,
        "ccnMethodMax": 37,
        "externals": [
            "PEAR_Command_Common",
            "PEAR",
            "PEAR_REST",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Downloader",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Common",
            "PEAR",
            "PEAR_Common",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [
            "PEAR_Command_Common"
        ],
        "lcom": 2,
        "length": 1566,
        "vocabulary": 241,
        "volume": 12391.58,
        "difficulty": 47.78,
        "effort": 592128.82,
        "level": 0.02,
        "bugs": 4.13,
        "time": 32896,
        "intelligentContent": 259.32,
        "number_operators": 382,
        "number_operands": 1184,
        "number_operators_unique": 18,
        "number_operands_unique": 223,
        "cloc": 34,
        "loc": 534,
        "lloc": 500,
        "mi": 19.05,
        "mIwoC": 0,
        "commentWeight": 19.05,
        "kanDefect": 8.33,
        "relativeStructuralComplexity": 1296,
        "relativeDataComplexity": 1.07,
        "relativeSystemComplexity": 1297.07,
        "totalStructuralComplexity": 14256,
        "totalDataComplexity": 11.76,
        "totalSystemComplexity": 14267.76,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Command_Config",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doConfigShow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doConfigGet",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doConfigSet",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doConfigHelp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doConfigCreate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_showConfig",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_checkLayer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 74,
        "ccn": 67,
        "ccnMethodMax": 21,
        "externals": [
            "PEAR_Command_Common",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Config"
        ],
        "parents": [
            "PEAR_Command_Common"
        ],
        "lcom": 2,
        "length": 821,
        "vocabulary": 179,
        "volume": 6144.21,
        "difficulty": 27.02,
        "effort": 166042.69,
        "level": 0.04,
        "bugs": 2.05,
        "time": 9225,
        "intelligentContent": 227.36,
        "number_operators": 184,
        "number_operands": 637,
        "number_operators_unique": 14,
        "number_operands_unique": 165,
        "cloc": 29,
        "loc": 281,
        "lloc": 252,
        "mi": 35.95,
        "mIwoC": 12.08,
        "commentWeight": 23.87,
        "kanDefect": 3.48,
        "relativeStructuralComplexity": 529,
        "relativeDataComplexity": 0.97,
        "relativeSystemComplexity": 529.97,
        "totalStructuralComplexity": 4232,
        "totalDataComplexity": 7.79,
        "totalSystemComplexity": 4239.79,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Command_Common",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCommands",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getShortcuts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGetoptArgs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getHelp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getHelpArgs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 37,
        "ccn": 30,
        "ccnMethodMax": 7,
        "externals": [
            "PEAR",
            "PEAR_Config"
        ],
        "parents": [
            "PEAR"
        ],
        "lcom": 1,
        "length": 376,
        "vocabulary": 94,
        "volume": 2464.53,
        "difficulty": 13.81,
        "effort": 34044.84,
        "level": 0.07,
        "bugs": 0.82,
        "time": 1891,
        "intelligentContent": 178.41,
        "number_operators": 79,
        "number_operands": 297,
        "number_operators_unique": 8,
        "number_operands_unique": 86,
        "cloc": 59,
        "loc": 203,
        "lloc": 144,
        "mi": 62.2,
        "mIwoC": 25.13,
        "commentWeight": 37.07,
        "kanDefect": 2.86,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 1.67,
        "relativeSystemComplexity": 50.67,
        "totalStructuralComplexity": 392,
        "totalDataComplexity": 13.38,
        "totalSystemComplexity": 405.38,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 9,
        "efferentCoupling": 2,
        "instability": 0.18,
        "violations": {}
    },
    {
        "name": "PEAR_Command_Package",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_displayValidationResults",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackager",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackageFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doPackageValidate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doSvnTag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_svnFindPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_svnRemoveTag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doCvsTag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doCvsDiff",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doPackageDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doSign",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInstaller",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCommandPackaging",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doMakeRPM",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doConvert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 17,
        "nbMethods": 17,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 17,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 171,
        "ccn": 155,
        "ccnMethodMax": 32,
        "externals": [
            "PEAR_Command_Common",
            "PEAR_Packager",
            "PEAR_PackageFile",
            "PEAR_Common",
            "PEAR",
            "PEAR",
            "PEAR",
            "Archive_Tar",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Dependency2",
            "PEAR",
            "Archive_Tar",
            "System",
            "PEAR_Installer",
            "PEAR_Command_Packaging",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [
            "PEAR_Command_Common"
        ],
        "lcom": 3,
        "length": 2059,
        "vocabulary": 358,
        "volume": 17468.18,
        "difficulty": 33.74,
        "effort": 589359.98,
        "level": 0.03,
        "bugs": 5.82,
        "time": 32742,
        "intelligentContent": 517.74,
        "number_operators": 516,
        "number_operands": 1543,
        "number_operators_unique": 15,
        "number_operands_unique": 343,
        "cloc": 42,
        "loc": 769,
        "lloc": 723,
        "mi": 17.71,
        "mIwoC": 0,
        "commentWeight": 17.71,
        "kanDefect": 13.78,
        "relativeStructuralComplexity": 2304,
        "relativeDataComplexity": 1.03,
        "relativeSystemComplexity": 2305.03,
        "totalStructuralComplexity": 39168,
        "totalDataComplexity": 17.53,
        "totalSystemComplexity": 39185.53,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 10,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Command_Pickle",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackager",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackageFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_convertPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 79,
        "ccn": 75,
        "ccnMethodMax": 67,
        "externals": [
            "PEAR_Command_Common",
            "PEAR_Packager",
            "PEAR_PackageFile",
            "PEAR_Common",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile_v1",
            "PEAR_Common"
        ],
        "parents": [
            "PEAR_Command_Common"
        ],
        "lcom": 2,
        "length": 737,
        "vocabulary": 137,
        "volume": 5231.25,
        "difficulty": 17.09,
        "effort": 89377.32,
        "level": 0.06,
        "bugs": 1.74,
        "time": 4965,
        "intelligentContent": 306.18,
        "number_operators": 186,
        "number_operands": 551,
        "number_operators_unique": 8,
        "number_operands_unique": 129,
        "cloc": 31,
        "loc": 284,
        "lloc": 250,
        "mi": 36.05,
        "mIwoC": 11.57,
        "commentWeight": 24.49,
        "kanDefect": 6,
        "relativeStructuralComplexity": 2116,
        "relativeDataComplexity": 0.52,
        "relativeSystemComplexity": 2116.52,
        "totalStructuralComplexity": 10580,
        "totalDataComplexity": 2.62,
        "totalSystemComplexity": 10582.62,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Command_Channels",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_sortChannels",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doList",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doUpdateAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doDelete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doAdd",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doUpdate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDownloader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doAlias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doDiscover",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doLogin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doLogout",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 13,
        "nbMethods": 13,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 13,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 127,
        "ccn": 115,
        "ccnMethodMax": 31,
        "externals": [
            "PEAR_Command_Common",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_ChannelFile",
            "PEAR",
            "PEAR",
            "System",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_ChannelFile",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "System",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_ChannelFile",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_ChannelFile",
            "PEAR",
            "PEAR_Downloader",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Config",
            "PEAR"
        ],
        "parents": [
            "PEAR_Command_Common"
        ],
        "lcom": 3,
        "length": 1581,
        "vocabulary": 276,
        "volume": 12819.58,
        "difficulty": 28.89,
        "effort": 370378.54,
        "level": 0.03,
        "bugs": 4.27,
        "time": 20577,
        "intelligentContent": 443.71,
        "number_operators": 412,
        "number_operands": 1169,
        "number_operators_unique": 13,
        "number_operands_unique": 263,
        "cloc": 67,
        "loc": 631,
        "lloc": 565,
        "mi": 24.18,
        "mIwoC": 0,
        "commentWeight": 24.18,
        "kanDefect": 9.35,
        "relativeStructuralComplexity": 2025,
        "relativeDataComplexity": 1.32,
        "relativeSystemComplexity": 2026.32,
        "totalStructuralComplexity": 26325,
        "totalDataComplexity": 17.13,
        "totalSystemComplexity": 26342.13,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 6,
        "instability": 0.86,
        "violations": {}
    },
    {
        "name": "PEAR_Command_Registry",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_sortinfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doList",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doListAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doFileList",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doShellTest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_doInfo2",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 249,
        "ccn": 242,
        "ccnMethodMax": 125,
        "externals": [
            "PEAR_Command_Common",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Installer_Role",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [
            "PEAR_Command_Common"
        ],
        "lcom": 3,
        "length": 2596,
        "vocabulary": 304,
        "volume": 21411.62,
        "difficulty": 46.92,
        "effort": 1004721.8,
        "level": 0.02,
        "bugs": 7.14,
        "time": 55818,
        "intelligentContent": 456.3,
        "number_operators": 652,
        "number_operands": 1944,
        "number_operators_unique": 14,
        "number_operands_unique": 290,
        "cloc": 37,
        "loc": 897,
        "lloc": 860,
        "mi": 15.47,
        "mIwoC": 0,
        "commentWeight": 15.47,
        "kanDefect": 18.19,
        "relativeStructuralComplexity": 2704,
        "relativeDataComplexity": 0.47,
        "relativeSystemComplexity": 2704.47,
        "totalStructuralComplexity": 21632,
        "totalDataComplexity": 3.77,
        "totalSystemComplexity": 21635.77,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Command_Auth",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "PEAR_Command_Channels"
        ],
        "parents": [
            "PEAR_Command_Channels"
        ],
        "lcom": 1,
        "length": 24,
        "vocabulary": 17,
        "volume": 98.1,
        "difficulty": 0,
        "effort": 0,
        "level": 1.42,
        "bugs": 0.03,
        "time": 0,
        "intelligentContent": 138.97,
        "number_operators": 0,
        "number_operands": 24,
        "number_operators_unique": 0,
        "number_operands_unique": 17,
        "cloc": 19,
        "loc": 42,
        "lloc": 21,
        "mi": 100.25,
        "mIwoC": 57.08,
        "commentWeight": 43.17,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 2,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Command_Mirror",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "factory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doDownloadAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 11,
        "ccn": 9,
        "ccnMethodMax": 9,
        "externals": [
            "PEAR_Command_Common",
            "PEAR_Command",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [
            "PEAR_Command_Common"
        ],
        "lcom": 2,
        "length": 125,
        "vocabulary": 47,
        "volume": 694.32,
        "difficulty": 6.07,
        "effort": 4215.54,
        "level": 0.16,
        "bugs": 0.23,
        "time": 234,
        "intelligentContent": 114.36,
        "number_operators": 23,
        "number_operands": 102,
        "number_operators_unique": 5,
        "number_operands_unique": 42,
        "cloc": 37,
        "loc": 91,
        "lloc": 54,
        "mi": 82.84,
        "mIwoC": 41.1,
        "commentWeight": 41.74,
        "kanDefect": 0.57,
        "relativeStructuralComplexity": 289,
        "relativeDataComplexity": 0.44,
        "relativeSystemComplexity": 289.44,
        "totalStructuralComplexity": 867,
        "totalDataComplexity": 1.33,
        "totalSystemComplexity": 868.33,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Command_Build",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doBuild",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 7,
        "ccnMethodMax": 5,
        "externals": [
            "PEAR_Command_Common",
            "PEAR_Builder",
            "PEAR"
        ],
        "parents": [
            "PEAR_Command_Common"
        ],
        "lcom": 2,
        "length": 66,
        "vocabulary": 35,
        "volume": 338.53,
        "difficulty": 7.26,
        "effort": 2457.5,
        "level": 0.14,
        "bugs": 0.11,
        "time": 137,
        "intelligentContent": 46.63,
        "number_operators": 17,
        "number_operands": 49,
        "number_operators_unique": 8,
        "number_operands_unique": 27,
        "cloc": 19,
        "loc": 49,
        "lloc": 30,
        "mi": 90.22,
        "mIwoC": 49.12,
        "commentWeight": 41.09,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.72,
        "relativeSystemComplexity": 25.72,
        "totalStructuralComplexity": 75,
        "totalDataComplexity": 2.17,
        "totalSystemComplexity": 77.17,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Proxy",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parseProxyInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_httpConnect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProxyAuth",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProxyUser",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isProxyConfigured",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "openSocket",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 6,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 30,
        "ccn": 24,
        "ccnMethodMax": 9,
        "externals": [
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [],
        "lcom": 1,
        "length": 219,
        "vocabulary": 61,
        "volume": 1298.83,
        "difficulty": 19.47,
        "effort": 25287.45,
        "level": 0.05,
        "bugs": 0.43,
        "time": 1405,
        "intelligentContent": 66.71,
        "number_operators": 60,
        "number_operands": 159,
        "number_operators_unique": 12,
        "number_operands_unique": 49,
        "cloc": 70,
        "loc": 164,
        "lloc": 94,
        "mi": 74.33,
        "mIwoC": 31.93,
        "commentWeight": 42.4,
        "kanDefect": 1.29,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 1.71,
        "relativeSystemComplexity": 37.71,
        "totalStructuralComplexity": 252,
        "totalDataComplexity": 12,
        "totalSystemComplexity": 264,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "PEAR_Task_Postinstallscript_rw",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addParamGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addConditionTypeGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getXml",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getParam",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 6,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 18,
        "ccn": 12,
        "ccnMethodMax": 6,
        "externals": [
            "PEAR_Task_Postinstallscript"
        ],
        "parents": [
            "PEAR_Task_Postinstallscript"
        ],
        "lcom": 2,
        "length": 174,
        "vocabulary": 39,
        "volume": 919.66,
        "difficulty": 11.09,
        "effort": 10199.87,
        "level": 0.09,
        "bugs": 0.31,
        "time": 567,
        "intelligentContent": 82.92,
        "number_operators": 52,
        "number_operands": 122,
        "number_operators_unique": 6,
        "number_operands_unique": 33,
        "cloc": 73,
        "loc": 135,
        "lloc": 62,
        "mi": 83.95,
        "mIwoC": 38.54,
        "commentWeight": 45.41,
        "kanDefect": 0.64,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.89,
        "relativeSystemComplexity": 10.89,
        "totalStructuralComplexity": 63,
        "totalDataComplexity": 13.25,
        "totalSystemComplexity": 76.25,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Task_Replace_rw",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getXml",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "PEAR_Task_Replace"
        ],
        "parents": [
            "PEAR_Task_Replace"
        ],
        "lcom": 2,
        "length": 35,
        "vocabulary": 12,
        "volume": 125.47,
        "difficulty": 2.9,
        "effort": 363.87,
        "level": 0.34,
        "bugs": 0.04,
        "time": 20,
        "intelligentContent": 43.27,
        "number_operators": 6,
        "number_operands": 29,
        "number_operators_unique": 2,
        "number_operands_unique": 10,
        "cloc": 11,
        "loc": 38,
        "lloc": 27,
        "mi": 90.96,
        "mIwoC": 53.95,
        "commentWeight": 37.01,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.47,
        "relativeSystemComplexity": 5.47,
        "totalStructuralComplexity": 20,
        "totalDataComplexity": 7.33,
        "totalSystemComplexity": 27.33,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Task_Unixeol",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "validateXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "init",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startSession",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "PEAR_Task_Common"
        ],
        "parents": [
            "PEAR_Task_Common"
        ],
        "lcom": 3,
        "length": 27,
        "vocabulary": 20,
        "volume": 116.69,
        "difficulty": 1.94,
        "effort": 226.52,
        "level": 0.52,
        "bugs": 0.04,
        "time": 13,
        "intelligentContent": 60.11,
        "number_operators": 5,
        "number_operands": 22,
        "number_operators_unique": 3,
        "number_operands_unique": 17,
        "cloc": 35,
        "loc": 57,
        "lloc": 22,
        "mi": 102.82,
        "mIwoC": 55.97,
        "commentWeight": 46.85,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3.17,
        "relativeSystemComplexity": 4.17,
        "totalStructuralComplexity": 3,
        "totalDataComplexity": 9.5,
        "totalSystemComplexity": 12.5,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "PEAR_Task_Common",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "init",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startSession",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasPostinstallTasks",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runPostinstallTasks",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isScript",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "throwError",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 12,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "PEAR_Task_Common",
            "PEAR"
        ],
        "parents": [],
        "lcom": 8,
        "length": 63,
        "vocabulary": 28,
        "volume": 302.86,
        "difficulty": 4.42,
        "effort": 1337.65,
        "level": 0.23,
        "bugs": 0.1,
        "time": 74,
        "intelligentContent": 68.57,
        "number_operators": 10,
        "number_operands": 53,
        "number_operators_unique": 4,
        "number_operands_unique": 24,
        "cloc": 116,
        "loc": 171,
        "lloc": 55,
        "mi": 91.97,
        "mIwoC": 44.12,
        "commentWeight": 47.84,
        "kanDefect": 0.52,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.44,
        "relativeSystemComplexity": 10.44,
        "totalStructuralComplexity": 81,
        "totalDataComplexity": 13,
        "totalSystemComplexity": 94,
        "package": "  PEAR\\",
        "pageRank": 0.01,
        "afferentCoupling": 7,
        "efferentCoupling": 3,
        "instability": 0.3,
        "violations": {}
    },
    {
        "name": "PEAR_Task_Postinstallscript",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "validateXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "init",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_stripNamespace",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startSession",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 47,
        "ccn": 43,
        "ccnMethodMax": 34,
        "externals": [
            "PEAR_Task_Common",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "this",
            "PEAR",
            "PEAR"
        ],
        "parents": [
            "PEAR_Task_Common"
        ],
        "lcom": 3,
        "length": 667,
        "vocabulary": 106,
        "volume": 4487.52,
        "difficulty": 19.35,
        "effort": 86812.75,
        "level": 0.05,
        "bugs": 1.5,
        "time": 4823,
        "intelligentContent": 231.97,
        "number_operators": 250,
        "number_operands": 417,
        "number_operators_unique": 9,
        "number_operands_unique": 97,
        "cloc": 66,
        "loc": 246,
        "lloc": 180,
        "mi": 55.4,
        "mIwoC": 19.45,
        "commentWeight": 35.95,
        "kanDefect": 3.77,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 2.49,
        "relativeSystemComplexity": 102.49,
        "totalStructuralComplexity": 500,
        "totalDataComplexity": 12.45,
        "totalSystemComplexity": 512.45,
        "package": "  PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "PEAR_Task_Replace",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "validateXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "init",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startSession",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 28,
        "ccn": 26,
        "ccnMethodMax": 15,
        "externals": [
            "PEAR_Task_Common",
            "PEAR"
        ],
        "parents": [
            "PEAR_Task_Common"
        ],
        "lcom": 2,
        "length": 275,
        "vocabulary": 55,
        "volume": 1589.87,
        "difficulty": 10.55,
        "effort": 16773.17,
        "level": 0.09,
        "bugs": 0.53,
        "time": 932,
        "intelligentContent": 150.7,
        "number_operators": 64,
        "number_operands": 211,
        "number_operators_unique": 5,
        "number_operands_unique": 50,
        "cloc": 37,
        "loc": 144,
        "lloc": 107,
        "mi": 65.17,
        "mIwoC": 29.82,
        "commentWeight": 35.35,
        "kanDefect": 1.78,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 2.37,
        "relativeSystemComplexity": 66.37,
        "totalStructuralComplexity": 192,
        "totalDataComplexity": 7.11,
        "totalSystemComplexity": 199.11,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "PEAR_Task_Windowseol_rw",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "PEAR_Task_Windowseol"
        ],
        "parents": [
            "PEAR_Task_Windowseol"
        ],
        "lcom": 4,
        "length": 18,
        "vocabulary": 9,
        "volume": 57.06,
        "difficulty": 1.86,
        "effort": 105.97,
        "level": 0.54,
        "bugs": 0.02,
        "time": 6,
        "intelligentContent": 30.72,
        "number_operators": 5,
        "number_operands": 13,
        "number_operators_unique": 2,
        "number_operands_unique": 7,
        "cloc": 12,
        "loc": 35,
        "lloc": 23,
        "mi": 97.25,
        "mIwoC": 57.86,
        "commentWeight": 39.39,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 3,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 8,
        "totalSystemComplexity": 12,
        "package": "  PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Task_Unixeol_rw",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "PEAR_Task_Unixeol"
        ],
        "parents": [
            "PEAR_Task_Unixeol"
        ],
        "lcom": 4,
        "length": 18,
        "vocabulary": 9,
        "volume": 57.06,
        "difficulty": 1.86,
        "effort": 105.97,
        "level": 0.54,
        "bugs": 0.02,
        "time": 6,
        "intelligentContent": 30.72,
        "number_operators": 5,
        "number_operands": 13,
        "number_operators_unique": 2,
        "number_operands_unique": 7,
        "cloc": 11,
        "loc": 34,
        "lloc": 23,
        "mi": 96.44,
        "mIwoC": 57.86,
        "commentWeight": 38.57,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 3,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 8,
        "totalSystemComplexity": 12,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Task_Windowseol",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "validateXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "init",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startSession",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "PEAR_Task_Common"
        ],
        "parents": [
            "PEAR_Task_Common"
        ],
        "lcom": 3,
        "length": 27,
        "vocabulary": 20,
        "volume": 116.69,
        "difficulty": 1.94,
        "effort": 226.52,
        "level": 0.52,
        "bugs": 0.04,
        "time": 13,
        "intelligentContent": 60.11,
        "number_operators": 5,
        "number_operands": 22,
        "number_operators_unique": 3,
        "number_operands_unique": 17,
        "cloc": 36,
        "loc": 58,
        "lloc": 22,
        "mi": 102.94,
        "mIwoC": 55.97,
        "commentWeight": 46.96,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3.17,
        "relativeSystemComplexity": 4.17,
        "totalStructuralComplexity": 3,
        "totalDataComplexity": 9.5,
        "totalSystemComplexity": 12.5,
        "package": "  PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "PEAR_Command",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "factory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFrontendObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFrontendClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFrontendType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "registerCommands",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCommands",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getShortcuts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGetoptArgs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDescription",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getHelp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 11,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 11,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 44,
        "ccn": 34,
        "ccnMethodMax": 19,
        "externals": [
            "PEAR_Command",
            "PEAR",
            "PEAR",
            "PEAR_Command",
            "class",
            "PEAR",
            "PEAR_Command",
            "PEAR_Config",
            "class",
            "PEAR_Frontend",
            "PEAR_Frontend",
            "PEAR_Command",
            "PEAR_XMLParser",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Command",
            "PEAR_Command",
            "PEAR_Command",
            "PEAR_Command",
            "PEAR_Command",
            "PEAR_Command"
        ],
        "parents": [],
        "lcom": 11,
        "length": 365,
        "vocabulary": 72,
        "volume": 2252.02,
        "difficulty": 23.17,
        "effort": 52184.16,
        "level": 0.04,
        "bugs": 0.75,
        "time": 2899,
        "intelligentContent": 97.19,
        "number_operators": 108,
        "number_operands": 257,
        "number_operators_unique": 11,
        "number_operands_unique": 61,
        "cloc": 149,
        "loc": 310,
        "lloc": 161,
        "mi": 67.77,
        "mIwoC": 23.81,
        "commentWeight": 43.96,
        "kanDefect": 2.73,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 2.57,
        "relativeSystemComplexity": 66.57,
        "totalStructuralComplexity": 704,
        "totalDataComplexity": 28.22,
        "totalSystemComplexity": 732.22,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 7,
        "instability": 0.7,
        "violations": {}
    },
    {
        "name": "PEAR_Packager",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "package",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 32,
        "ccn": 32,
        "ccnMethodMax": 32,
        "externals": [
            "PEAR_Common",
            "PEAR",
            "PEAR_PackageFile",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [
            "PEAR_Common"
        ],
        "lcom": 1,
        "length": 342,
        "vocabulary": 64,
        "volume": 2052,
        "difficulty": 19.43,
        "effort": 39867.43,
        "level": 0.05,
        "bugs": 0.68,
        "time": 2215,
        "intelligentContent": 105.62,
        "number_operators": 70,
        "number_operands": 272,
        "number_operators_unique": 8,
        "number_operands_unique": 56,
        "cloc": 20,
        "loc": 149,
        "lloc": 129,
        "mi": 53.34,
        "mIwoC": 26.46,
        "commentWeight": 26.88,
        "kanDefect": 3.41,
        "relativeStructuralComplexity": 289,
        "relativeDataComplexity": 0.72,
        "relativeSystemComplexity": 289.72,
        "totalStructuralComplexity": 289,
        "totalDataComplexity": 0.72,
        "totalSystemComplexity": 289.72,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "PEAR_PackageFile_v2",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "PEAR_PackageFile_v2",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPEARDownloader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPEARDependency2",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInstalledBinary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "installBinary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProvidesExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isEquivalent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_differentPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_differentVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_differentState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_differentRole",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_differentEmail",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_differentName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_unmatchedMaintainers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_differentNotes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_differentSummary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_differentDescription",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_missingFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRawState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRawCompatible",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRawPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRawChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRequestedGroup",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRequestedGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLastInstalledVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLastInstalledVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listPostinstallScripts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initPostinstallScripts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runPostinstallScripts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flattenFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getFlattenedFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setConfig",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLogger",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDeps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCompatible",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPackagefile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValidationWarnings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackageFile",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getArchiveFile",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isIncomplete",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "packageInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtends",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSummary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDescription",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMaintainers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLeads",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDevelopers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getContributors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getHelpers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStability",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLicense",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLicenseLocation",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNotes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUsesrole",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUsestask",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getConfigureOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInstallationFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setInstalledAs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInstalledLocation",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "installedFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getContents",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFileAttribute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDirtree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDirtree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetDirtree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isCompatible",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCompatible",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isSubpackageOf",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isSubpackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dependsOn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDependencyGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDeps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackageType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getReleases",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getChangelog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasDeps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackagexmlVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSourcePackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBundledPackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLastModified",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFileContents",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRW",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultGenerator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "analyzeSourceCode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTasksNs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTask",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_ksplice",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_insertBefore",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_mergeTag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 108,
        "nbMethods": 104,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 104,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 1,
        "wmc": 460,
        "ccn": 353,
        "ccnMethodMax": 35,
        "externals": [
            "PEAR_ErrorStack",
            "PEAR_Downloader",
            "PEAR_Dependency2",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Common",
            "task",
            "PEAR_Common",
            "taskname",
            "PEAR",
            "PEAR_Frontend",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "Archive_Tar",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile_v2_rw",
            "PEAR_PackageFile_Generator_v2",
            "PEAR_PackageFile_v2_Validator",
            "PEAR_PackageFile_v2_Validator"
        ],
        "parents": [],
        "lcom": 4,
        "length": 3123,
        "vocabulary": 297,
        "volume": 25653.32,
        "difficulty": 52.5,
        "effort": 1346889.56,
        "level": 0.02,
        "bugs": 8.55,
        "time": 74827,
        "intelligentContent": 488.6,
        "number_operators": 829,
        "number_operands": 2294,
        "number_operators_unique": 13,
        "number_operands_unique": 284,
        "cloc": 342,
        "loc": 1826,
        "lloc": 1484,
        "mi": 31.07,
        "mIwoC": 0,
        "commentWeight": 31.07,
        "kanDefect": 26.61,
        "relativeStructuralComplexity": 4761,
        "relativeDataComplexity": 2.57,
        "relativeSystemComplexity": 4763.57,
        "totalStructuralComplexity": 514188,
        "totalDataComplexity": 277.47,
        "totalSystemComplexity": 514465.47,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 4,
        "efferentCoupling": 12,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "PEAR_PackageFile_v2_rw",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "setProvidesExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_setPackageVersion2_1",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setExtends",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSummary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDescription",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addMaintainer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateMaintainer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteMaintainer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setReleaseVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setAPIVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setReleaseStability",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setAPIStability",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLicense",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setNotes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setInstalledAs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "installedFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clearContents",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addBundledPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addTaskToFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addCompatiblePackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetUsesrole",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUsesrole",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetUsestask",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUsestask",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clearCompatible",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clearDeps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPhpDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPearinstallerDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addConflictingPackageDepWithChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addConflictingPackageDepWithUri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addDependencyGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_constructDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addGroupPackageDepWithChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addGroupPackageDepWithURI",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addGroupExtensionDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addGroupDependency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPackageDepWithChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPackageDepWithUri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addSubpackageDepWithChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addSubpackageDepWithUri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addExtensionDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addOsDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addArchDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPackageType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addRelease",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getCurrentRelease",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addInstallAs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addIgnore",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addBinarypackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addConfigureOption",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPhpInstallCondition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addExtensionInstallCondition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setOsInstallCondition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setArchInstallCondition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSourcePackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "generateChangeLogEntry",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setChangelogEntry",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clearChangeLog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 62,
        "nbMethods": 62,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 62,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 239,
        "ccn": 178,
        "ccnMethodMax": 17,
        "externals": [
            "PEAR_PackageFile_v2"
        ],
        "parents": [
            "PEAR_PackageFile_v2"
        ],
        "lcom": 2,
        "length": 2796,
        "vocabulary": 151,
        "volume": 20238.58,
        "difficulty": 97.94,
        "effort": 1982216,
        "level": 0.01,
        "bugs": 6.75,
        "time": 110123,
        "intelligentContent": 206.64,
        "number_operators": 527,
        "number_operands": 2269,
        "number_operators_unique": 12,
        "number_operands_unique": 139,
        "cloc": 320,
        "loc": 1169,
        "lloc": 849,
        "mi": 36.23,
        "mIwoC": 0,
        "commentWeight": 36.23,
        "kanDefect": 12.09,
        "relativeStructuralComplexity": 324,
        "relativeDataComplexity": 2.82,
        "relativeSystemComplexity": 326.82,
        "totalStructuralComplexity": 20088,
        "totalDataComplexity": 174.95,
        "totalSystemComplexity": 20262.95,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "PEAR_PackageFile_v2_Validator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "validate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_stupidSchemaValidate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_processAttribs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_processStructure",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateStabilityVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateMaintainers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validatePhpDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validatePearinstallerDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validatePackageDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateSubpackageDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateExtensionDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateOsDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateArchDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateInstallConditions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateCompatible",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateBundle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateRelease",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateRole",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_pearVersionTooLow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_invalidTagOrder",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_ignoreNotAllowed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fileNotAllowed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_oldStyleFileNotAllowed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_tagMissingAttribute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_tagHasNoAttribs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_invalidInternalStructure",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_invalidFileRole",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_invalidFileName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_invalidFileInstallAs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_invalidDirName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_filelistCannotContainFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_filelistMustContainDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_tagCannotBeEmpty",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_UrlOrChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_NoChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_UrlOrChannelGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_NoChannelGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_unknownChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_noPackageVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_NoBundledPackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_AtLeast2BundledPackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_ChannelOrUri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_noChildTag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_invalidVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_invalidState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_invalidTask",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_unknownTask",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_subpackageCannotProvideExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_subpackagesCannotConflict",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_cannotProvideExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_mustProvideExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_cannotHaveSrcpackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_mustSrcPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_mustSrcuri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_uriDepsCannotHaveVersioning",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_conflictingDepsCannotHaveVersioning",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_DepchannelCannotBeUri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_bundledPackagesMustBeFilename",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_binaryPackageMustBePackagename",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fileNotFound",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_notInContents",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_cannotValidateNoPathSet",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_usesroletaskMustHaveChannelOrUri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_usesroletaskMustHavePackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_usesroletaskMustHaveRoleTask",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_cannotConflictWithAllOs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_invalidDepGroupName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_multipleToplevelDirNotAllowed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_multipleInstallAs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_ignoreAndInstallAs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_analyzeBundledPackages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_analyzePhpFiles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "analyzeSourceCode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_buildProvidesArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 76,
        "nbMethods": 76,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 76,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 549,
        "ccn": 474,
        "ccnMethodMax": 77,
        "externals": [
            "PEAR",
            "PEAR_Validate",
            "PEAR_Installer_Role",
            "PEAR_Installer_Role",
            "PEAR_Common",
            "PEAR_PackageFile",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_Common",
            "PEAR_Installer_Role",
            "PEAR",
            "PEAR"
        ],
        "parents": [],
        "lcom": 1,
        "length": 3933,
        "vocabulary": 442,
        "volume": 34562.82,
        "difficulty": 60.94,
        "effort": 2106258.3,
        "level": 0.02,
        "bugs": 11.52,
        "time": 117014,
        "intelligentContent": 567.16,
        "number_operators": 886,
        "number_operands": 3047,
        "number_operators_unique": 17,
        "number_operands_unique": 425,
        "cloc": 113,
        "loc": 1737,
        "lloc": 1624,
        "mi": 19.25,
        "mIwoC": 0,
        "commentWeight": 19.25,
        "kanDefect": 34,
        "relativeStructuralComplexity": 7744,
        "relativeDataComplexity": 0.52,
        "relativeSystemComplexity": 7744.52,
        "totalStructuralComplexity": 588544,
        "totalDataComplexity": 39.57,
        "totalSystemComplexity": 588583.57,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 5,
        "instability": 0.71,
        "violations": {}
    },
    {
        "name": "PEAR_PackageFile_Parser_v2",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "setConfig",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLogger",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_unIndent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "postProcess",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 10,
        "ccn": 6,
        "ccnMethodMax": 3,
        "externals": [
            "PEAR_XMLParser",
            "PEAR",
            "class"
        ],
        "parents": [
            "PEAR_XMLParser"
        ],
        "lcom": 2,
        "length": 89,
        "vocabulary": 27,
        "volume": 423.18,
        "difficulty": 9.57,
        "effort": 4050.48,
        "level": 0.1,
        "bugs": 0.14,
        "time": 225,
        "intelligentContent": 44.21,
        "number_operators": 22,
        "number_operands": 67,
        "number_operators_unique": 6,
        "number_operands_unique": 21,
        "cloc": 35,
        "loc": 88,
        "lloc": 53,
        "mi": 84.63,
        "mIwoC": 43.19,
        "commentWeight": 41.44,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 0.76,
        "relativeSystemComplexity": 64.76,
        "totalStructuralComplexity": 320,
        "totalDataComplexity": 3.78,
        "totalSystemComplexity": 323.78,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_PackageFile_Parser_v1",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "fromV2",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setConfig",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLogger",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_unIndent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_element_start_1_0",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_element_end_1_0",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_pkginfo_cdata_1_0",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 98,
        "ccn": 91,
        "ccnMethodMax": 42,
        "externals": [
            "PEAR_PackageFile_v1",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR_PackageFile_v1"
        ],
        "parents": [],
        "lcom": 2,
        "length": 659,
        "vocabulary": 96,
        "volume": 4339.49,
        "difficulty": 42,
        "effort": 182258.59,
        "level": 0.02,
        "bugs": 1.45,
        "time": 10125,
        "intelligentContent": 103.32,
        "number_operators": 167,
        "number_operands": 492,
        "number_operators_unique": 14,
        "number_operands_unique": 82,
        "cloc": 82,
        "loc": 419,
        "lloc": 337,
        "mi": 38.8,
        "mIwoC": 7.15,
        "commentWeight": 31.65,
        "kanDefect": 4.44,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 64.75,
        "totalStructuralComplexity": 512,
        "totalDataComplexity": 6,
        "totalSystemComplexity": 518,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_PackageFile_Generator_v2",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackagerVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toTgz",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toTgz2",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toPackageFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toV2",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_recursiveXmlFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_formatDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_deFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setOption",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "serialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSerializedData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_serializeValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_serializeArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_createXMLTag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 19,
        "nbMethods": 18,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 18,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 167,
        "ccn": 149,
        "ccnMethodMax": 54,
        "externals": [
            "PEAR",
            "System",
            "PEAR",
            "System",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "System",
            "task",
            "PEAR",
            "System",
            "System",
            "Archive_Tar",
            "PEAR",
            "PEAR",
            "System",
            "PEAR",
            "System",
            "PEAR",
            "PEAR",
            "XML_Util",
            "XML_Util",
            "XML_Util",
            "XML_Util",
            "PEAR",
            "XML_Util",
            "XML_Util"
        ],
        "parents": [],
        "lcom": 2,
        "length": 1478,
        "vocabulary": 184,
        "volume": 11119.82,
        "difficulty": 43.81,
        "effort": 487179.14,
        "level": 0.02,
        "bugs": 3.71,
        "time": 27066,
        "intelligentContent": 253.81,
        "number_operators": 414,
        "number_operands": 1064,
        "number_operators_unique": 14,
        "number_operands_unique": 170,
        "cloc": 188,
        "loc": 770,
        "lloc": 582,
        "mi": 34.64,
        "mIwoC": 0,
        "commentWeight": 34.64,
        "kanDefect": 10.28,
        "relativeStructuralComplexity": 1296,
        "relativeDataComplexity": 1.05,
        "relativeSystemComplexity": 1297.05,
        "totalStructuralComplexity": 24624,
        "totalDataComplexity": 19.92,
        "totalSystemComplexity": 24643.92,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 5,
        "instability": 0.83,
        "violations": {}
    },
    {
        "name": "PEAR_PackageFile_Generator_v1",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackagerVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toTgz",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toPackageFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_fixXmlEncoding",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_makeReleaseXml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "recursiveXmlFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_formatDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_formatFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_unIndent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dependenciesToV2",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toV2",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_convertDependencies2_0",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_convertFilelist2_0",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_convertRelease2_0",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_processDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_processPhpDeps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_processMultipleDepsName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 20,
        "nbMethods": 20,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 20,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 258,
        "ccn": 239,
        "ccnMethodMax": 52,
        "externals": [
            "System",
            "PEAR",
            "System",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "Archive_Tar",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "System",
            "PEAR",
            "System",
            "PEAR",
            "PEAR",
            "PEAR",
            "class"
        ],
        "parents": [],
        "lcom": 3,
        "length": 2487,
        "vocabulary": 330,
        "volume": 20807.04,
        "difficulty": 38.34,
        "effort": 797822.12,
        "level": 0.03,
        "bugs": 6.94,
        "time": 44323,
        "intelligentContent": 542.64,
        "number_operators": 617,
        "number_operands": 1870,
        "number_operators_unique": 13,
        "number_operands_unique": 317,
        "cloc": 202,
        "loc": 1058,
        "lloc": 856,
        "mi": 31.32,
        "mIwoC": 0,
        "commentWeight": 31.32,
        "kanDefect": 21.45,
        "relativeStructuralComplexity": 1849,
        "relativeDataComplexity": 0.84,
        "relativeSystemComplexity": 1849.84,
        "totalStructuralComplexity": 36980,
        "totalDataComplexity": 16.73,
        "totalSystemComplexity": 36996.73,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 4,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "PEAR_PackageFile_v1",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "installBinary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setConfig",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRequestedGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLastInstalledVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLastInstalledVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInstalledBinary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listPostinstallScripts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initPostinstallScripts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLogger",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPackagefile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackageFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackageType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getArchiveFile",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "packageInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDirtree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDirtree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetDirtree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isIncomplete",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getChannel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtends",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getArray",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRawPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clearMaintainers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMaintainers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addMaintainer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateMaintainer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteMaintainer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRawState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setState",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLicense",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLicense",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSummary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSummary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDescription",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDescription",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNotes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setNotes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDeps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clearDeps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPhpDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPackageDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addExtensionDep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDeps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasDeps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDependencyGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isCompatible",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isSubpackageOf",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isSubpackage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dependsOn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getConfigureOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasConfigureOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addConfigureOption",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clearConfigureOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProvides",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProvidesExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInstallationFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFileAttribute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetFilelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setInstalledAs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "installedFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getChangelog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPackagexmlVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValidationWarnings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateError",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_validateWarning",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_getErrorMessage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_analyzePhpFiles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultGenerator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFileContents",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_analyzeSourceCode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_buildProvidesArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 88,
        "nbMethods": 85,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 85,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 0,
        "wmc": 291,
        "ccn": 204,
        "ccnMethodMax": 64,
        "externals": [
            "PEAR_ErrorStack",
            "PEAR",
            "PEAR_Common",
            "PEAR_Common",
            "PEAR_Common",
            "PEAR_Common",
            "PEAR_Common",
            "PEAR_Common",
            "PEAR",
            "PEAR_Common",
            "PEAR_PackageFile_Generator_v1",
            "Archive_Tar",
            "PEAR",
            "PEAR"
        ],
        "parents": [],
        "lcom": 17,
        "length": 1733,
        "vocabulary": 238,
        "volume": 13681.72,
        "difficulty": 41.94,
        "effort": 573803.94,
        "level": 0.02,
        "bugs": 4.56,
        "time": 31878,
        "intelligentContent": 326.23,
        "number_operators": 486,
        "number_operands": 1247,
        "number_operators_unique": 15,
        "number_operands_unique": 223,
        "cloc": 170,
        "loc": 1102,
        "lloc": 932,
        "mi": 28.58,
        "mIwoC": 0,
        "commentWeight": 28.58,
        "kanDefect": 11.73,
        "relativeStructuralComplexity": 784,
        "relativeDataComplexity": 3.1,
        "relativeSystemComplexity": 787.1,
        "totalStructuralComplexity": 68992,
        "totalDataComplexity": 272.45,
        "totalSystemComplexity": 69264.45,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 5,
        "efferentCoupling": 5,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "PEAR_Installer_Role_Common",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "processInstallation",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLocationConfig",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isExecutable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isInstallable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 22,
        "ccn": 15,
        "ccnMethodMax": 10,
        "externals": [
            "PEAR",
            "PEAR_Installer_Role_Common",
            "PEAR",
            "PEAR_Installer_Role_Common",
            "PEAR",
            "PEAR_Installer_Role_Common",
            "PEAR",
            "PEAR_Installer_Role_Common",
            "PEAR",
            "PEAR_Installer_Role_Common",
            "PEAR"
        ],
        "parents": [],
        "lcom": 7,
        "length": 207,
        "vocabulary": 43,
        "volume": 1123.24,
        "difficulty": 13.51,
        "effort": 15179.3,
        "level": 0.07,
        "bugs": 0.37,
        "time": 843,
        "intelligentContent": 83.12,
        "number_operators": 68,
        "number_operands": 139,
        "number_operators_unique": 7,
        "number_operands_unique": 36,
        "cloc": 65,
        "loc": 151,
        "lloc": 86,
        "mi": 76.94,
        "mIwoC": 34.42,
        "commentWeight": 42.51,
        "kanDefect": 0.99,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 2.4,
        "relativeSystemComplexity": 27.4,
        "totalStructuralComplexity": 200,
        "totalDataComplexity": 19.17,
        "totalSystemComplexity": 219.17,
        "package": "   PEAR\\",
        "pageRank": 0.02,
        "afferentCoupling": 11,
        "efferentCoupling": 3,
        "instability": 0.21,
        "violations": {}
    },
    {
        "name": "PEAR_Installer_Role_Cfg",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "setup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "processInstallation",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 12,
        "ccnMethodMax": 9,
        "externals": [
            "PEAR_Installer_Role_Common",
            "PEAR",
            "System",
            "System",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [
            "PEAR_Installer_Role_Common"
        ],
        "lcom": 1,
        "length": 134,
        "vocabulary": 42,
        "volume": 722.57,
        "difficulty": 11.41,
        "effort": 8245.8,
        "level": 0.09,
        "bugs": 0.24,
        "time": 458,
        "intelligentContent": 63.32,
        "number_operators": 37,
        "number_operands": 97,
        "number_operators_unique": 8,
        "number_operands_unique": 34,
        "cloc": 43,
        "loc": 94,
        "lloc": 51,
        "mi": 84.44,
        "mIwoC": 41.12,
        "commentWeight": 43.32,
        "kanDefect": 0.64,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 0.63,
        "relativeSystemComplexity": 121.63,
        "totalStructuralComplexity": 242,
        "totalDataComplexity": 1.25,
        "totalSystemComplexity": 243.25,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Installer_Role_Man",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "PEAR_Installer_Role_Common"
        ],
        "parents": [
            "PEAR_Installer_Role_Common"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 24,
        "loc": 28,
        "lloc": 4,
        "mi": 220.53,
        "mIwoC": 171,
        "commentWeight": 49.53,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Installer_Role_Www",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "PEAR_Installer_Role_Common"
        ],
        "parents": [
            "PEAR_Installer_Role_Common"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 23,
        "loc": 27,
        "lloc": 4,
        "mi": 220.5,
        "mIwoC": 171,
        "commentWeight": 49.5,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Installer_Role_Data",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "PEAR_Installer_Role_Common"
        ],
        "parents": [
            "PEAR_Installer_Role_Common"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 23,
        "loc": 27,
        "lloc": 4,
        "mi": 220.5,
        "mIwoC": 171,
        "commentWeight": 49.5,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Installer_Role_Doc",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "PEAR_Installer_Role_Common"
        ],
        "parents": [
            "PEAR_Installer_Role_Common"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 23,
        "loc": 27,
        "lloc": 4,
        "mi": 220.5,
        "mIwoC": 171,
        "commentWeight": 49.5,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Installer_Role_Script",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "PEAR_Installer_Role_Common"
        ],
        "parents": [
            "PEAR_Installer_Role_Common"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 23,
        "loc": 27,
        "lloc": 4,
        "mi": 220.5,
        "mIwoC": 171,
        "commentWeight": 49.5,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Installer_Role_Php",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "PEAR_Installer_Role_Common"
        ],
        "parents": [
            "PEAR_Installer_Role_Common"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 23,
        "loc": 27,
        "lloc": 4,
        "mi": 220.5,
        "mIwoC": 171,
        "commentWeight": 49.5,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Installer_Role_Ext",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "PEAR_Installer_Role_Common"
        ],
        "parents": [
            "PEAR_Installer_Role_Common"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 23,
        "loc": 27,
        "lloc": 4,
        "mi": 220.5,
        "mIwoC": 171,
        "commentWeight": 49.5,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Installer_Role_Src",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "setup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "PEAR_Installer_Role_Common"
        ],
        "parents": [
            "PEAR_Installer_Role_Common"
        ],
        "lcom": 1,
        "length": 5,
        "vocabulary": 4,
        "volume": 10,
        "difficulty": 0,
        "effort": 0,
        "level": 1.6,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 16,
        "number_operators": 0,
        "number_operands": 5,
        "number_operators_unique": 0,
        "number_operands_unique": 4,
        "cloc": 23,
        "loc": 31,
        "lloc": 8,
        "mi": 121.77,
        "mIwoC": 73.16,
        "commentWeight": 48.61,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 4,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 4,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "PEAR_Installer_Role",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "initializeConfig",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "factory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValidRoles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInstallableRoles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBaseinstallRoles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPhpRoles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "registerRoles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 42,
        "ccn": 36,
        "ccnMethodMax": 10,
        "externals": [
            "PEAR_Installer_Role",
            "PEAR_Installer_Role",
            "PEAR_Installer_Role",
            "a",
            "PEAR_Installer_Role",
            "PEAR_Installer_Role",
            "PEAR_Installer_Role",
            "PEAR_Installer_Role",
            "PEAR_XMLParser",
            "PEAR",
            "PEAR",
            "PEAR_Installer_Role",
            "PEAR_Installer_Role",
            "PEAR_Installer_Role",
            "PEAR_Installer_Role"
        ],
        "parents": [],
        "lcom": 7,
        "length": 254,
        "vocabulary": 50,
        "volume": 1433.54,
        "difficulty": 19.98,
        "effort": 28635.83,
        "level": 0.05,
        "bugs": 0.48,
        "time": 1591,
        "intelligentContent": 71.76,
        "number_operators": 72,
        "number_operands": 182,
        "number_operators_unique": 9,
        "number_operands_unique": 41,
        "cloc": 65,
        "loc": 214,
        "lloc": 149,
        "mi": 63.34,
        "mIwoC": 25.65,
        "commentWeight": 37.69,
        "kanDefect": 3.42,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 2.06,
        "relativeSystemComplexity": 38.06,
        "totalStructuralComplexity": 252,
        "totalDataComplexity": 14.43,
        "totalSystemComplexity": 266.43,
        "package": "   PEAR\\",
        "pageRank": 0.01,
        "afferentCoupling": 7,
        "efferentCoupling": 5,
        "instability": 0.42,
        "violations": {}
    },
    {
        "name": "Console_Getopt",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getopt2",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getopt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doGetopt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parseShortOption",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_isShortOpt",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_isLongOpt",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_parseLongOption",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "readPHPArgv",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 63,
        "ccn": 56,
        "ccnMethodMax": 18,
        "externals": [
            "Console_Getopt",
            "Console_Getopt",
            "PEAR",
            "Console_Getopt",
            "PEAR",
            "Console_Getopt",
            "PEAR",
            "PEAR",
            "Console_Getopt",
            "Console_Getopt",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR",
            "Console_Getopt",
            "Console_Getopt",
            "PEAR",
            "PEAR",
            "PEAR",
            "PEAR"
        ],
        "parents": [],
        "lcom": 8,
        "length": 486,
        "vocabulary": 60,
        "volume": 2870.75,
        "difficulty": 44.81,
        "effort": 128633.98,
        "level": 0.02,
        "bugs": 0.96,
        "time": 7146,
        "intelligentContent": 64.07,
        "number_operators": 162,
        "number_operands": 324,
        "number_operators_unique": 13,
        "number_operands_unique": 47,
        "cloc": 129,
        "loc": 296,
        "lloc": 167,
        "mi": 62.44,
        "mIwoC": 19.77,
        "commentWeight": 42.68,
        "kanDefect": 2.25,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 8.79,
        "relativeSystemComplexity": 12.79,
        "totalStructuralComplexity": 32,
        "totalDataComplexity": 70.33,
        "totalSystemComplexity": 102.33,
        "package": " Console_Getopt\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 3,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Structures_Graph_Manipulator_TopologicalSorter",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "_nonVisitedInDegree",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_sort",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sort",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 17,
        "ccn": 15,
        "ccnMethodMax": 8,
        "externals": [
            "static",
            "Pear",
            "Structures_Graph_Manipulator_AcyclicTest",
            "Pear",
            "Structures_Graph_Manipulator_TopologicalSorter"
        ],
        "parents": [],
        "lcom": 3,
        "length": 141,
        "vocabulary": 31,
        "volume": 698.54,
        "difficulty": 25.95,
        "effort": 18128.82,
        "level": 0.04,
        "bugs": 0.23,
        "time": 1007,
        "intelligentContent": 26.92,
        "number_operators": 32,
        "number_operands": 109,
        "number_operators_unique": 10,
        "number_operands_unique": 21,
        "cloc": 46,
        "loc": 112,
        "lloc": 66,
        "mi": 80.25,
        "mIwoC": 38.38,
        "commentWeight": 41.88,
        "kanDefect": 1.88,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 81.5,
        "totalStructuralComplexity": 243,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 244.5,
        "package": "  Structures_Graph\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 5,
        "instability": 0.63,
        "violations": {}
    },
    {
        "name": "Structures_Graph_Node",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGraph",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setGraph",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getData",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "metadataKeyExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMetadata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unsetMetadata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setMetadata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_connectTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "connectTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNeighbours",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "connectsTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "inDegree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "outDegree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 15,
        "nbMethods": 12,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 0,
        "wmc": 31,
        "ccn": 17,
        "ccnMethodMax": 5,
        "externals": [
            "Pear",
            "Pear",
            "Pear",
            "Pear"
        ],
        "parents": [],
        "lcom": 2,
        "length": 138,
        "vocabulary": 26,
        "volume": 648.66,
        "difficulty": 13.5,
        "effort": 8756.92,
        "level": 0.07,
        "bugs": 0.22,
        "time": 486,
        "intelligentContent": 48.05,
        "number_operators": 48,
        "number_operands": 90,
        "number_operators_unique": 6,
        "number_operands_unique": 20,
        "cloc": 195,
        "loc": 319,
        "lloc": 124,
        "mi": 79.16,
        "mIwoC": 32.36,
        "commentWeight": 46.8,
        "kanDefect": 1.59,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 2.08,
        "relativeSystemComplexity": 66.08,
        "totalStructuralComplexity": 960,
        "totalDataComplexity": 31.22,
        "totalSystemComplexity": 991.22,
        "package": "Structures_Graph\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Structures_Graph",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "Structures_Graph",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDirected",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addNode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeNode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNodes",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 0,
        "wmc": 11,
        "ccn": 6,
        "ccnMethodMax": 6,
        "externals": [
            "Pear",
            "Pear"
        ],
        "parents": [],
        "lcom": 2,
        "length": 58,
        "vocabulary": 18,
        "volume": 241.86,
        "difficulty": 7.5,
        "effort": 1813.92,
        "level": 0.13,
        "bugs": 0.08,
        "time": 101,
        "intelligentContent": 32.25,
        "number_operators": 19,
        "number_operands": 39,
        "number_operators_unique": 5,
        "number_operands_unique": 13,
        "cloc": 73,
        "loc": 121,
        "lloc": 48,
        "mi": 92.49,
        "mIwoC": 45.83,
        "commentWeight": 46.66,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.17,
        "relativeSystemComplexity": 10.17,
        "totalStructuralComplexity": 54,
        "totalDataComplexity": 7,
        "totalSystemComplexity": 61,
        "package": "  Structures_Graph\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Archive_Tar",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extract",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listContent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createModify",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addModify",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extractModify",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extractInString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extractList",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setAttribute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setIgnoreRegexp",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setIgnoreList",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_warning",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_isArchive",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_openWrite",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_openRead",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_openReadWrite",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_close",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_cleanFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_writeBlock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_readBlock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_jumpBlock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_writeFooter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addList",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_addString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_writeHeader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_writeHeaderBlock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_writeLongHeader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_readHeader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_tarRecToSize",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_maliciousFilename",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_readLongHeader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_extractInString",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_extractList",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_openAppend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_append",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_dirCheck",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_pathReduction",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_translateWinPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 44,
        "nbMethods": 43,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 39,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 370,
        "ccn": 327,
        "ccnMethodMax": 66,
        "externals": [
            "PEAR",
            "PEAR"
        ],
        "parents": [
            "PEAR"
        ],
        "lcom": 1,
        "length": 3258,
        "vocabulary": 304,
        "volume": 26871.75,
        "difficulty": 101.57,
        "effort": 2729318.96,
        "level": 0.01,
        "bugs": 8.96,
        "time": 151629,
        "intelligentContent": 264.57,
        "number_operators": 1086,
        "number_operands": 2172,
        "number_operators_unique": 26,
        "number_operands_unique": 278,
        "cloc": 552,
        "loc": 1866,
        "lloc": 1314,
        "mi": 37.32,
        "mIwoC": 0,
        "commentWeight": 37.32,
        "kanDefect": 18.51,
        "relativeStructuralComplexity": 1296,
        "relativeDataComplexity": 3.07,
        "relativeSystemComplexity": 1299.07,
        "totalStructuralComplexity": 57024,
        "totalDataComplexity": 135.19,
        "totalSystemComplexity": 57159.19,
        "package": "Archive_Tar\\",
        "pageRank": 0,
        "afferentCoupling": 9,
        "efferentCoupling": 1,
        "instability": 0.1,
        "violations": {}
    },
    {
        "name": "OS_Guess",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseSignature",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_detectGlibcVersion",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSignature",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSysname",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNodename",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCpu",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRelease",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtra",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "matchSignature",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_matchFragment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 6,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 5,
        "nbMethodsSetters": 0,
        "wmc": 57,
        "ccn": 47,
        "ccnMethodMax": 25,
        "externals": [
            "System"
        ],
        "parents": [],
        "lcom": 1,
        "length": 446,
        "vocabulary": 101,
        "volume": 2969.56,
        "difficulty": 26.95,
        "effort": 80022.8,
        "level": 0.04,
        "bugs": 0.99,
        "time": 4446,
        "intelligentContent": 110.2,
        "number_operators": 137,
        "number_operands": 309,
        "number_operators_unique": 15,
        "number_operands_unique": 86,
        "cloc": 96,
        "loc": 296,
        "lloc": 200,
        "mi": 57.78,
        "mIwoC": 19.17,
        "commentWeight": 38.61,
        "kanDefect": 3.01,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 3.29,
        "relativeSystemComplexity": 19.29,
        "totalStructuralComplexity": 176,
        "totalDataComplexity": 36.2,
        "totalSystemComplexity": 212.2,
        "package": "   PEAR\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "App\\Console\\Kernel",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "schedule",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "commands",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Foundation\\Console\\Kernel",
            "Illuminate\\Console\\Scheduling\\Schedule"
        ],
        "parents": [
            "Illuminate\\Foundation\\Console\\Kernel"
        ],
        "lcom": 2,
        "length": 6,
        "vocabulary": 6,
        "volume": 15.51,
        "difficulty": 0.5,
        "effort": 7.75,
        "level": 2,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 31.02,
        "number_operators": 1,
        "number_operands": 5,
        "number_operators_unique": 1,
        "number_operands_unique": 5,
        "cloc": 17,
        "loc": 30,
        "lloc": 13,
        "mi": 113.19,
        "mIwoC": 67.23,
        "commentWeight": 45.96,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.25,
        "relativeSystemComplexity": 1.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 2.5,
        "package": "App\\Console\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Exceptions\\Handler",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "register",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Foundation\\Exceptions\\Handler"
        ],
        "parents": [
            "Illuminate\\Foundation\\Exceptions\\Handler"
        ],
        "lcom": 1,
        "length": 4,
        "vocabulary": 4,
        "volume": 8,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 16,
        "number_operators": 0,
        "number_operands": 4,
        "number_operators_unique": 0,
        "number_operands_unique": 4,
        "cloc": 16,
        "loc": 27,
        "lloc": 11,
        "mi": 117.29,
        "mIwoC": 70.83,
        "commentWeight": 46.47,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 1,
        "package": "App\\Exceptions\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Gateway\\Gateway",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "test",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "App\\Repository\\Repository"
        ],
        "parents": [],
        "lcom": 1,
        "length": 7,
        "vocabulary": 5,
        "volume": 16.25,
        "difficulty": 1.67,
        "effort": 27.09,
        "level": 0.6,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 9.75,
        "number_operators": 2,
        "number_operands": 5,
        "number_operators_unique": 2,
        "number_operands_unique": 3,
        "cloc": 3,
        "loc": 16,
        "lloc": 13,
        "mi": 98.17,
        "mIwoC": 67.09,
        "commentWeight": 31.08,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 1.75,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 3.5,
        "package": "App\\Gateway\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\API\\ClientController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "index",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "store",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "show",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "destroy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "App\\Http\\Controllers\\Controller",
            "App\\Models\\Client",
            "Illuminate\\Http\\Request",
            "App\\Models\\Client",
            "App\\Models\\Client",
            "Illuminate\\Http\\Request"
        ],
        "parents": [
            "App\\Http\\Controllers\\Controller"
        ],
        "lcom": 5,
        "length": 35,
        "vocabulary": 16,
        "volume": 140,
        "difficulty": 4.5,
        "effort": 630,
        "level": 0.22,
        "bugs": 0.05,
        "time": 35,
        "intelligentContent": 31.11,
        "number_operators": 8,
        "number_operands": 27,
        "number_operators_unique": 4,
        "number_operands_unique": 12,
        "cloc": 32,
        "loc": 59,
        "lloc": 27,
        "mi": 98.93,
        "mIwoC": 53.48,
        "commentWeight": 45.45,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.67,
        "relativeSystemComplexity": 5.67,
        "totalStructuralComplexity": 20,
        "totalDataComplexity": 8.33,
        "totalSystemComplexity": 28.33,
        "package": "App\\Http\\Controllers\\API\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\Auth\\ConfirmPasswordController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "App\\Http\\Controllers\\Controller"
        ],
        "parents": [
            "App\\Http\\Controllers\\Controller"
        ],
        "lcom": 1,
        "length": 2,
        "vocabulary": 2,
        "volume": 2,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 4,
        "number_operators": 0,
        "number_operands": 2,
        "number_operators_unique": 0,
        "number_operands_unique": 2,
        "cloc": 20,
        "loc": 30,
        "lloc": 10,
        "mi": 123.62,
        "mIwoC": 75.94,
        "commentWeight": 47.68,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 1,
        "package": "App\\Http\\Controllers\\Auth\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\Auth\\ForgotPasswordController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "App\\Http\\Controllers\\Controller"
        ],
        "parents": [
            "App\\Http\\Controllers\\Controller"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 10,
        "loc": 15,
        "lloc": 5,
        "mi": 218.68,
        "mIwoC": 171,
        "commentWeight": 47.68,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Http\\Controllers\\Auth\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\Auth\\LoginController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "App\\Http\\Controllers\\Controller"
        ],
        "parents": [
            "App\\Http\\Controllers\\Controller"
        ],
        "lcom": 1,
        "length": 3,
        "vocabulary": 3,
        "volume": 4.75,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 9.51,
        "number_operators": 0,
        "number_operands": 3,
        "number_operators_unique": 0,
        "number_operands_unique": 3,
        "cloc": 20,
        "loc": 30,
        "lloc": 10,
        "mi": 120.99,
        "mIwoC": 73.31,
        "commentWeight": 47.68,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 4,
        "package": "App\\Http\\Controllers\\Auth\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\Auth\\RegisterController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validator",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "App\\Http\\Controllers\\Controller",
            "Illuminate\\Support\\Facades\\Validator",
            "Illuminate\\Support\\Facades\\Hash",
            "App\\Models\\User"
        ],
        "parents": [
            "App\\Http\\Controllers\\Controller"
        ],
        "lcom": 3,
        "length": 31,
        "vocabulary": 13,
        "volume": 114.71,
        "difficulty": 1.21,
        "effort": 138.61,
        "level": 0.83,
        "bugs": 0.04,
        "time": 8,
        "intelligentContent": 94.94,
        "number_operators": 2,
        "number_operands": 29,
        "number_operators_unique": 1,
        "number_operands_unique": 12,
        "cloc": 32,
        "loc": 50,
        "lloc": 18,
        "mi": 105.34,
        "mIwoC": 58.06,
        "commentWeight": 47.28,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.53,
        "relativeSystemComplexity": 16.53,
        "totalStructuralComplexity": 48,
        "totalDataComplexity": 1.6,
        "totalSystemComplexity": 49.6,
        "package": "App\\Http\\Controllers\\Auth\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\Auth\\ResetPasswordController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "App\\Http\\Controllers\\Controller"
        ],
        "parents": [
            "App\\Http\\Controllers\\Controller"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 15,
        "loc": 21,
        "lloc": 6,
        "mi": 219.3,
        "mIwoC": 171,
        "commentWeight": 48.3,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Http\\Controllers\\Auth\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\Auth\\VerificationController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "App\\Http\\Controllers\\Controller"
        ],
        "parents": [
            "App\\Http\\Controllers\\Controller"
        ],
        "lcom": 1,
        "length": 9,
        "vocabulary": 6,
        "volume": 23.26,
        "difficulty": 0,
        "effort": 0,
        "level": 1.33,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 31.02,
        "number_operators": 0,
        "number_operands": 9,
        "number_operators_unique": 0,
        "number_operands_unique": 6,
        "cloc": 20,
        "loc": 32,
        "lloc": 12,
        "mi": 113.79,
        "mIwoC": 66.76,
        "commentWeight": 47.04,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 4,
        "package": "App\\Http\\Controllers\\Auth\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\Controller",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Illuminate\\Routing\\Controller"
        ],
        "parents": [
            "Illuminate\\Routing\\Controller"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 5,
        "lloc": 5,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Http\\Controllers\\",
        "pageRank": 0.01,
        "afferentCoupling": 8,
        "efferentCoupling": 1,
        "instability": 0.11,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\HomeController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "index",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "App\\Http\\Controllers\\Controller",
            "App\\Repository\\Repository",
            "App\\Gateway\\Gateway"
        ],
        "parents": [
            "App\\Http\\Controllers\\Controller"
        ],
        "lcom": 1,
        "length": 12,
        "vocabulary": 5,
        "volume": 27.86,
        "difficulty": 1.25,
        "effort": 34.83,
        "level": 0.8,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 22.29,
        "number_operators": 2,
        "number_operands": 10,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 11,
        "loc": 26,
        "lloc": 15,
        "mi": 106.37,
        "mIwoC": 64.09,
        "commentWeight": 42.28,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0.33,
        "relativeSystemComplexity": 4.33,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 0.67,
        "totalSystemComplexity": 8.67,
        "package": "App\\Http\\Controllers\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Kernel",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Illuminate\\Foundation\\Http\\Kernel"
        ],
        "parents": [
            "Illuminate\\Foundation\\Http\\Kernel"
        ],
        "lcom": 0,
        "length": 12,
        "vocabulary": 12,
        "volume": 43.02,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 86.04,
        "number_operators": 0,
        "number_operands": 12,
        "number_operators_unique": 0,
        "number_operands_unique": 12,
        "cloc": 21,
        "loc": 42,
        "lloc": 21,
        "mi": 104.04,
        "mIwoC": 59.58,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Http\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Middleware\\Authenticate",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "redirectTo",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Illuminate\\Auth\\Middleware\\Authenticate"
        ],
        "parents": [
            "Illuminate\\Auth\\Middleware\\Authenticate"
        ],
        "lcom": 1,
        "length": 5,
        "vocabulary": 4,
        "volume": 10,
        "difficulty": 1.5,
        "effort": 15,
        "level": 0.67,
        "bugs": 0,
        "time": 1,
        "intelligentContent": 6.67,
        "number_operators": 2,
        "number_operands": 3,
        "number_operators_unique": 2,
        "number_operands_unique": 2,
        "cloc": 6,
        "loc": 16,
        "lloc": 10,
        "mi": 111.55,
        "mIwoC": 70.92,
        "commentWeight": 40.63,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 2,
        "package": "App\\Http\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Middleware\\EncryptCookies",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Illuminate\\Cookie\\Middleware\\EncryptCookies"
        ],
        "parents": [
            "Illuminate\\Cookie\\Middleware\\EncryptCookies"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 5,
        "loc": 10,
        "lloc": 5,
        "mi": 215.46,
        "mIwoC": 171,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Http\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Middleware\\PreventRequestsDuringMaintenance",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance"
        ],
        "parents": [
            "Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 5,
        "loc": 10,
        "lloc": 5,
        "mi": 215.46,
        "mIwoC": 171,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Http\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Middleware\\RedirectIfAuthenticated",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "handle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [
            "Illuminate\\Http\\Request",
            "Closure",
            "Illuminate\\Support\\Facades\\Auth"
        ],
        "parents": [],
        "lcom": 1,
        "length": 15,
        "vocabulary": 7,
        "volume": 42.11,
        "difficulty": 4.13,
        "effort": 173.71,
        "level": 0.24,
        "bugs": 0.01,
        "time": 10,
        "intelligentContent": 10.21,
        "number_operators": 4,
        "number_operands": 11,
        "number_operators_unique": 3,
        "number_operands_unique": 4,
        "cloc": 8,
        "loc": 22,
        "lloc": 14,
        "mi": 103.29,
        "mIwoC": 63.09,
        "commentWeight": 40.21,
        "kanDefect": 0.45,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.67,
        "relativeSystemComplexity": 5.67,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 1.67,
        "totalSystemComplexity": 5.67,
        "package": "App\\Http\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Middleware\\TrimStrings",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Illuminate\\Foundation\\Http\\Middleware\\TrimStrings"
        ],
        "parents": [
            "Illuminate\\Foundation\\Http\\Middleware\\TrimStrings"
        ],
        "lcom": 0,
        "length": 2,
        "vocabulary": 2,
        "volume": 2,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 4,
        "number_operators": 0,
        "number_operands": 2,
        "number_operators_unique": 0,
        "number_operands_unique": 2,
        "cloc": 5,
        "loc": 10,
        "lloc": 5,
        "mi": 126.97,
        "mIwoC": 82.51,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Http\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Middleware\\TrustHosts",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "hosts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Http\\Middleware\\TrustHosts"
        ],
        "parents": [
            "Illuminate\\Http\\Middleware\\TrustHosts"
        ],
        "lcom": 1,
        "length": 2,
        "vocabulary": 2,
        "volume": 2,
        "difficulty": 0.5,
        "effort": 1,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 4,
        "number_operators": 1,
        "number_operands": 1,
        "number_operators_unique": 1,
        "number_operands_unique": 1,
        "cloc": 5,
        "loc": 13,
        "lloc": 8,
        "mi": 119.04,
        "mIwoC": 78.06,
        "commentWeight": 40.98,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 1.5,
        "package": "App\\Http\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Middleware\\TrustProxies",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Fideloper\\Proxy\\TrustProxies"
        ],
        "parents": [
            "Fideloper\\Proxy\\TrustProxies"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 10,
        "loc": 16,
        "lloc": 6,
        "mi": 218.04,
        "mIwoC": 171,
        "commentWeight": 47.04,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Http\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Middleware\\VerifyCsrfToken",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Illuminate\\Foundation\\Http\\Middleware\\VerifyCsrfToken"
        ],
        "parents": [
            "Illuminate\\Foundation\\Http\\Middleware\\VerifyCsrfToken"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 5,
        "loc": 10,
        "lloc": 5,
        "mi": 215.46,
        "mIwoC": 171,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Http\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Models\\Client",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "optymizationsQuarters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "parents": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "lcom": 1,
        "length": 9,
        "vocabulary": 9,
        "volume": 28.53,
        "difficulty": 0.5,
        "effort": 14.26,
        "level": 2,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 57.06,
        "number_operators": 1,
        "number_operands": 8,
        "number_operators_unique": 1,
        "number_operands_unique": 8,
        "cloc": 0,
        "loc": 12,
        "lloc": 12,
        "mi": 66.13,
        "mIwoC": 66.13,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 1.5,
        "package": "App\\Models\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "App\\Models\\Optymization",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "OptymizationAttribute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "parents": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "lcom": 1,
        "length": 3,
        "vocabulary": 3,
        "volume": 4.75,
        "difficulty": 0.5,
        "effort": 2.38,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 9.51,
        "number_operators": 1,
        "number_operands": 2,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 0,
        "loc": 10,
        "lloc": 10,
        "mi": 73.31,
        "mIwoC": 73.31,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 1.5,
        "package": "App\\Models\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Models\\OptymizationsAttributes",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "parents": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "lcom": 0,
        "length": 1,
        "vocabulary": 1,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 1,
        "number_operators_unique": 0,
        "number_operands_unique": 1,
        "cloc": 0,
        "loc": 6,
        "lloc": 6,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Models\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Models\\OptymizationsQuarters",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "optymizations",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "parents": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "lcom": 1,
        "length": 3,
        "vocabulary": 3,
        "volume": 4.75,
        "difficulty": 0.5,
        "effort": 2.38,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 9.51,
        "number_operators": 1,
        "number_operands": 2,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 0,
        "loc": 10,
        "lloc": 10,
        "mi": 73.31,
        "mIwoC": 73.31,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 1.5,
        "package": "App\\Models\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Models\\User",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Illuminate\\Foundation\\Auth\\User"
        ],
        "parents": [
            "Illuminate\\Foundation\\Auth\\User"
        ],
        "lcom": 0,
        "length": 7,
        "vocabulary": 6,
        "volume": 18.09,
        "difficulty": 0,
        "effort": 0,
        "level": 1.71,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 31.02,
        "number_operators": 0,
        "number_operands": 7,
        "number_operators_unique": 0,
        "number_operands_unique": 6,
        "cloc": 15,
        "loc": 23,
        "lloc": 8,
        "mi": 118.83,
        "mIwoC": 71.36,
        "commentWeight": 47.47,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Models\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "App\\Providers\\AppServiceProvider",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "register",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "boot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\ServiceProvider",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Support\\ServiceProvider"
        ],
        "lcom": 2,
        "length": 1,
        "vocabulary": 1,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 1,
        "number_operators_unique": 0,
        "number_operands_unique": 1,
        "cloc": 11,
        "loc": 22,
        "lloc": 11,
        "mi": 215.46,
        "mIwoC": 171,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 2,
        "package": "App\\Providers\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Providers\\AuthServiceProvider",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "boot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Foundation\\Support\\Providers\\AuthServiceProvider"
        ],
        "parents": [
            "Illuminate\\Foundation\\Support\\Providers\\AuthServiceProvider"
        ],
        "lcom": 1,
        "length": 1,
        "vocabulary": 1,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 1,
        "number_operators_unique": 0,
        "number_operands_unique": 1,
        "cloc": 11,
        "loc": 20,
        "lloc": 9,
        "mi": 216.62,
        "mIwoC": 171,
        "commentWeight": 45.62,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 1,
        "package": "App\\Providers\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Providers\\BroadcastServiceProvider",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "boot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\ServiceProvider",
            "Illuminate\\Support\\Facades\\Broadcast"
        ],
        "parents": [
            "Illuminate\\Support\\ServiceProvider"
        ],
        "lcom": 1,
        "length": 1,
        "vocabulary": 1,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 1,
        "number_operators_unique": 0,
        "number_operands_unique": 1,
        "cloc": 5,
        "loc": 14,
        "lloc": 9,
        "mi": 210.96,
        "mIwoC": 171,
        "commentWeight": 39.96,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 1,
        "package": "App\\Providers\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Providers\\EventServiceProvider",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "boot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Foundation\\Support\\Providers\\EventServiceProvider"
        ],
        "parents": [
            "Illuminate\\Foundation\\Support\\Providers\\EventServiceProvider"
        ],
        "lcom": 1,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 11,
        "loc": 19,
        "lloc": 8,
        "mi": 217.21,
        "mIwoC": 171,
        "commentWeight": 46.21,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Providers\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Providers\\RouteServiceProvider",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "boot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configureRateLimiting",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Illuminate\\Foundation\\Support\\Providers\\RouteServiceProvider",
            "Illuminate\\Support\\Facades\\Route",
            "Illuminate\\Support\\Facades\\Route",
            "Illuminate\\Cache\\RateLimiting\\Limit",
            "Illuminate\\Support\\Facades\\RateLimiter"
        ],
        "parents": [
            "Illuminate\\Foundation\\Support\\Providers\\RouteServiceProvider"
        ],
        "lcom": 1,
        "length": 16,
        "vocabulary": 9,
        "volume": 50.72,
        "difficulty": 0.94,
        "effort": 47.55,
        "level": 1.07,
        "bugs": 0.02,
        "time": 3,
        "intelligentContent": 54.1,
        "number_operators": 1,
        "number_operands": 15,
        "number_operators_unique": 1,
        "number_operands_unique": 8,
        "cloc": 25,
        "loc": 44,
        "lloc": 19,
        "mi": 105.89,
        "mIwoC": 59.9,
        "commentWeight": 45.99,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 0.08,
        "relativeSystemComplexity": 121.08,
        "totalStructuralComplexity": 242,
        "totalDataComplexity": 0.17,
        "totalSystemComplexity": 242.17,
        "package": "App\\Providers\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repository\\Repository",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "test",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 2,
        "vocabulary": 2,
        "volume": 2,
        "difficulty": 0.5,
        "effort": 1,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 4,
        "number_operators": 1,
        "number_operands": 1,
        "number_operators_unique": 1,
        "number_operands_unique": 1,
        "cloc": 0,
        "loc": 8,
        "lloc": 8,
        "mi": 78.06,
        "mIwoC": 78.06,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 1,
        "package": "App\\Repository\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Database\\Factories\\UserFactory",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "definition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Eloquent\\Factories\\Factory",
            "Illuminate\\Support\\Str"
        ],
        "parents": [
            "Illuminate\\Database\\Eloquent\\Factories\\Factory"
        ],
        "lcom": 1,
        "length": 10,
        "vocabulary": 9,
        "volume": 31.7,
        "difficulty": 0.56,
        "effort": 17.83,
        "level": 1.78,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 56.35,
        "number_operators": 1,
        "number_operands": 9,
        "number_operators_unique": 1,
        "number_operands_unique": 8,
        "cloc": 11,
        "loc": 26,
        "lloc": 15,
        "mi": 105.98,
        "mIwoC": 63.7,
        "commentWeight": 42.28,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0.33,
        "relativeSystemComplexity": 4.33,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0.33,
        "totalSystemComplexity": 4.33,
        "package": "Database\\Factories\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreateRoleTable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "lcom": 2,
        "length": 6,
        "vocabulary": 3,
        "volume": 9.51,
        "difficulty": 0,
        "effort": 0,
        "level": 1,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 9.51,
        "number_operators": 0,
        "number_operands": 6,
        "number_operators_unique": 0,
        "number_operands_unique": 3,
        "cloc": 10,
        "loc": 25,
        "lloc": 15,
        "mi": 108.88,
        "mIwoC": 67.36,
        "commentWeight": 41.52,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 9,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 18,
        "package": "Database\\Factories\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreateUsersTable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "lcom": 2,
        "length": 22,
        "vocabulary": 10,
        "volume": 73.08,
        "difficulty": 0,
        "effort": 0,
        "level": 0.91,
        "bugs": 0.02,
        "time": 0,
        "intelligentContent": 66.44,
        "number_operators": 0,
        "number_operands": 22,
        "number_operators_unique": 0,
        "number_operands_unique": 10,
        "cloc": 10,
        "loc": 33,
        "lloc": 23,
        "mi": 94.77,
        "mIwoC": 57.11,
        "commentWeight": 37.66,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 169,
        "totalStructuralComplexity": 338,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 338,
        "package": "Database\\Factories\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreatePasswordResetsTable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "lcom": 2,
        "length": 9,
        "vocabulary": 5,
        "volume": 20.9,
        "difficulty": 0,
        "effort": 0,
        "level": 1.11,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 23.22,
        "number_operators": 0,
        "number_operands": 9,
        "number_operators_unique": 0,
        "number_operands_unique": 5,
        "cloc": 10,
        "loc": 26,
        "lloc": 16,
        "mi": 105.34,
        "mIwoC": 64.36,
        "commentWeight": 40.98,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 25,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 50,
        "package": "Database\\Factories\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreateFailedJobsTable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "lcom": 2,
        "length": 16,
        "vocabulary": 8,
        "volume": 48,
        "difficulty": 0,
        "effort": 0,
        "level": 1,
        "bugs": 0.02,
        "time": 0,
        "intelligentContent": 48,
        "number_operators": 0,
        "number_operands": 16,
        "number_operators_unique": 0,
        "number_operands_unique": 8,
        "cloc": 10,
        "loc": 30,
        "lloc": 20,
        "mi": 98.71,
        "mIwoC": 59.71,
        "commentWeight": 38.99,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 64,
        "totalStructuralComplexity": 128,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 128,
        "package": "Database\\Factories\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreateClientsTable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "lcom": 2,
        "length": 13,
        "vocabulary": 6,
        "volume": 33.6,
        "difficulty": 0,
        "effort": 0,
        "level": 0.92,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 31.02,
        "number_operators": 0,
        "number_operands": 13,
        "number_operators_unique": 0,
        "number_operands_unique": 6,
        "cloc": 10,
        "loc": 29,
        "lloc": 19,
        "mi": 100.75,
        "mIwoC": 61.28,
        "commentWeight": 39.47,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 25,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 50,
        "package": "Database\\Factories\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreateOptymizationsQuartersTable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "lcom": 2,
        "length": 17,
        "vocabulary": 8,
        "volume": 51,
        "difficulty": 0,
        "effort": 0,
        "level": 0.94,
        "bugs": 0.02,
        "time": 0,
        "intelligentContent": 48,
        "number_operators": 0,
        "number_operands": 17,
        "number_operators_unique": 0,
        "number_operands_unique": 8,
        "cloc": 10,
        "loc": 30,
        "lloc": 20,
        "mi": 98.52,
        "mIwoC": 59.53,
        "commentWeight": 38.99,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 100,
        "totalStructuralComplexity": 200,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 200,
        "package": "Database\\Factories\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreateOptymizationAttributesTable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "lcom": 2,
        "length": 9,
        "vocabulary": 4,
        "volume": 18,
        "difficulty": 0,
        "effort": 0,
        "level": 0.89,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 16,
        "number_operators": 0,
        "number_operands": 9,
        "number_operators_unique": 0,
        "number_operands_unique": 4,
        "cloc": 10,
        "loc": 27,
        "lloc": 17,
        "mi": 104.7,
        "mIwoC": 64.24,
        "commentWeight": 40.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 25,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 50,
        "package": "Database\\Factories\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreateOptymizationsTable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "lcom": 2,
        "length": 21,
        "vocabulary": 9,
        "volume": 66.57,
        "difficulty": 0,
        "effort": 0,
        "level": 0.86,
        "bugs": 0.02,
        "time": 0,
        "intelligentContent": 57.06,
        "number_operators": 0,
        "number_operands": 21,
        "number_operators_unique": 0,
        "number_operands_unique": 9,
        "cloc": 10,
        "loc": 31,
        "lloc": 21,
        "mi": 96.79,
        "mIwoC": 58.26,
        "commentWeight": 38.53,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 81,
        "totalStructuralComplexity": 162,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 162,
        "package": "Database\\Factories\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreateCheckOptymizationTable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "lcom": 2,
        "length": 15,
        "vocabulary": 7,
        "volume": 42.11,
        "difficulty": 0,
        "effort": 0,
        "level": 0.93,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 39.3,
        "number_operators": 0,
        "number_operands": 15,
        "number_operators_unique": 0,
        "number_operands_unique": 7,
        "cloc": 10,
        "loc": 29,
        "lloc": 19,
        "mi": 100.06,
        "mIwoC": 60.6,
        "commentWeight": 39.47,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 100,
        "totalStructuralComplexity": 200,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 200,
        "package": "Database\\Factories\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreateClientsCheckTable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "lcom": 2,
        "length": 16,
        "vocabulary": 7,
        "volume": 44.92,
        "difficulty": 0,
        "effort": 0,
        "level": 0.88,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 39.3,
        "number_operators": 0,
        "number_operands": 16,
        "number_operators_unique": 0,
        "number_operands_unique": 7,
        "cloc": 10,
        "loc": 28,
        "lloc": 18,
        "mi": 100.87,
        "mIwoC": 60.91,
        "commentWeight": 39.96,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 49,
        "totalStructuralComplexity": 98,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 98,
        "package": "Database\\Factories\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreateUsersProjectTable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "lcom": 2,
        "length": 16,
        "vocabulary": 7,
        "volume": 44.92,
        "difficulty": 0,
        "effort": 0,
        "level": 0.88,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 39.3,
        "number_operators": 0,
        "number_operands": 16,
        "number_operators_unique": 0,
        "number_operands_unique": 7,
        "cloc": 10,
        "loc": 28,
        "lloc": 18,
        "mi": 100.87,
        "mIwoC": 60.91,
        "commentWeight": 39.96,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 49,
        "totalStructuralComplexity": 98,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 98,
        "package": "Database\\Factories\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database\\Seeders\\CheckOptymizationsSeeder",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Seeder",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB"
        ],
        "parents": [
            "Illuminate\\Database\\Seeder"
        ],
        "lcom": 1,
        "length": 24,
        "vocabulary": 11,
        "volume": 83.03,
        "difficulty": 0,
        "effort": 0,
        "level": 0.92,
        "bugs": 0.03,
        "time": 0,
        "intelligentContent": 76.11,
        "number_operators": 0,
        "number_operands": 24,
        "number_operators_unique": 0,
        "number_operands_unique": 11,
        "cloc": 5,
        "loc": 16,
        "lloc": 11,
        "mi": 101.8,
        "mIwoC": 63.71,
        "commentWeight": 38.09,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 4,
        "package": "Database\\Seeders\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database\\Seeders\\ClientOptymizationsSeeder",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Seeder",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB"
        ],
        "parents": [
            "Illuminate\\Database\\Seeder"
        ],
        "lcom": 1,
        "length": 20,
        "vocabulary": 7,
        "volume": 56.15,
        "difficulty": 0,
        "effort": 0,
        "level": 0.7,
        "bugs": 0.02,
        "time": 0,
        "intelligentContent": 39.3,
        "number_operators": 0,
        "number_operands": 20,
        "number_operators_unique": 0,
        "number_operands_unique": 7,
        "cloc": 5,
        "loc": 16,
        "lloc": 11,
        "mi": 102.99,
        "mIwoC": 64.9,
        "commentWeight": 38.09,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 4,
        "package": "Database\\Seeders\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database\\Seeders\\ClientsSeeder",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Seeder",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB"
        ],
        "parents": [
            "Illuminate\\Database\\Seeder"
        ],
        "lcom": 1,
        "length": 12,
        "vocabulary": 7,
        "volume": 33.69,
        "difficulty": 0,
        "effort": 0,
        "level": 1.17,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 39.3,
        "number_operators": 0,
        "number_operands": 12,
        "number_operators_unique": 0,
        "number_operands_unique": 7,
        "cloc": 5,
        "loc": 14,
        "lloc": 9,
        "mi": 108.31,
        "mIwoC": 68.35,
        "commentWeight": 39.96,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 4,
        "package": "Database\\Seeders\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database\\Seeders\\DatabaseSeeder",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Seeder"
        ],
        "parents": [
            "Illuminate\\Database\\Seeder"
        ],
        "lcom": 1,
        "length": 9,
        "vocabulary": 1,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0.22,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 9,
        "number_operators_unique": 0,
        "number_operands_unique": 1,
        "cloc": 5,
        "loc": 21,
        "lloc": 16,
        "mi": 205.3,
        "mIwoC": 171,
        "commentWeight": 34.3,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 1,
        "package": "Database\\Seeders\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database\\Seeders\\OptymizationsAttributesSeeder",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Seeder",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB"
        ],
        "parents": [
            "Illuminate\\Database\\Seeder"
        ],
        "lcom": 1,
        "length": 16,
        "vocabulary": 7,
        "volume": 44.92,
        "difficulty": 0,
        "effort": 0,
        "level": 0.88,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 39.3,
        "number_operators": 0,
        "number_operands": 16,
        "number_operators_unique": 0,
        "number_operands_unique": 7,
        "cloc": 5,
        "loc": 16,
        "lloc": 11,
        "mi": 103.67,
        "mIwoC": 65.58,
        "commentWeight": 38.09,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 4,
        "package": "Database\\Seeders\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database\\Seeders\\OptymizationsQuartesSeeder",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "Illuminate\\Database\\Seeder",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB"
        ],
        "parents": [
            "Illuminate\\Database\\Seeder"
        ],
        "lcom": 1,
        "length": 34,
        "vocabulary": 14,
        "volume": 129.45,
        "difficulty": 3.82,
        "effort": 494.26,
        "level": 0.26,
        "bugs": 0.04,
        "time": 27,
        "intelligentContent": 33.9,
        "number_operators": 6,
        "number_operands": 28,
        "number_operators_unique": 3,
        "number_operands_unique": 11,
        "cloc": 5,
        "loc": 18,
        "lloc": 13,
        "mi": 96.95,
        "mIwoC": 60.51,
        "commentWeight": 36.44,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 4,
        "package": "Database\\Seeders\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database\\Seeders\\OptymizationsSeeder",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Seeder",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB"
        ],
        "parents": [
            "Illuminate\\Database\\Seeder"
        ],
        "lcom": 1,
        "length": 36,
        "vocabulary": 16,
        "volume": 144,
        "difficulty": 0,
        "effort": 0,
        "level": 0.89,
        "bugs": 0.05,
        "time": 0,
        "intelligentContent": 128,
        "number_operators": 0,
        "number_operands": 36,
        "number_operators_unique": 0,
        "number_operands_unique": 16,
        "cloc": 5,
        "loc": 16,
        "lloc": 11,
        "mi": 100.12,
        "mIwoC": 62.04,
        "commentWeight": 38.09,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 4,
        "package": "Database\\Seeders\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database\\Seeders\\UserProjectSeeder",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Seeder",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB"
        ],
        "parents": [
            "Illuminate\\Database\\Seeder"
        ],
        "lcom": 1,
        "length": 20,
        "vocabulary": 6,
        "volume": 51.7,
        "difficulty": 0,
        "effort": 0,
        "level": 0.6,
        "bugs": 0.02,
        "time": 0,
        "intelligentContent": 31.02,
        "number_operators": 0,
        "number_operands": 20,
        "number_operators_unique": 0,
        "number_operands_unique": 6,
        "cloc": 5,
        "loc": 16,
        "lloc": 11,
        "mi": 103.24,
        "mIwoC": 65.15,
        "commentWeight": 38.09,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 4,
        "package": "Database\\Seeders\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database\\Seeders\\UserRoleSeeder",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Seeder",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB"
        ],
        "parents": [
            "Illuminate\\Database\\Seeder"
        ],
        "lcom": 1,
        "length": 9,
        "vocabulary": 5,
        "volume": 20.9,
        "difficulty": 0,
        "effort": 0,
        "level": 1.11,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 23.22,
        "number_operators": 0,
        "number_operands": 9,
        "number_operators_unique": 0,
        "number_operands_unique": 5,
        "cloc": 5,
        "loc": 15,
        "lloc": 10,
        "mi": 107.8,
        "mIwoC": 68.81,
        "commentWeight": 38.99,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 4,
        "package": "Database\\Seeders\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database\\Seeders\\UserSeeder",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Seeder",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Support\\Facades\\DB"
        ],
        "parents": [
            "Illuminate\\Database\\Seeder"
        ],
        "lcom": 1,
        "length": 33,
        "vocabulary": 19,
        "volume": 140.18,
        "difficulty": 0,
        "effort": 0,
        "level": 1.15,
        "bugs": 0.05,
        "time": 0,
        "intelligentContent": 161.42,
        "number_operators": 0,
        "number_operands": 33,
        "number_operators_unique": 0,
        "number_operands_unique": 19,
        "cloc": 5,
        "loc": 15,
        "lloc": 10,
        "mi": 102.01,
        "mIwoC": 63.02,
        "commentWeight": 38.99,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 4,
        "package": "Database\\Seeders\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "SebastianBergmann\\PHPLOC\\Analyser",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "countFiles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "preProcessFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "countFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNamespaceName",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClassName",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isTestClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isTestMethod",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNextNonWhitespaceTokenPos",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPreviousNonWhitespaceTokenPos",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPreviousNonWhitespaceNonCommentTokenPos",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isClassDeclaration",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 12,
        "nbMethodsPrivate": 8,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 161,
        "ccn": 150,
        "ccnMethodMax": 104,
        "externals": [
            "SebastianBergmann\\PHPLOC\\Collector"
        ],
        "parents": [],
        "lcom": 1,
        "length": 874,
        "vocabulary": 97,
        "volume": 5768.32,
        "difficulty": 69.67,
        "effort": 401859.89,
        "level": 0.01,
        "bugs": 1.92,
        "time": 22326,
        "intelligentContent": 82.8,
        "number_operators": 302,
        "number_operands": 572,
        "number_operators_unique": 19,
        "number_operands_unique": 78,
        "cloc": 62,
        "loc": 478,
        "lloc": 418,
        "mi": 26.47,
        "mIwoC": 0,
        "commentWeight": 26.47,
        "kanDefect": 5.74,
        "relativeStructuralComplexity": 2809,
        "relativeDataComplexity": 0.43,
        "relativeSystemComplexity": 2809.43,
        "totalStructuralComplexity": 33708,
        "totalDataComplexity": 5.11,
        "totalSystemComplexity": 33713.11,
        "package": "SebastianBergmann\\PHPLOC\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "SebastianBergmann\\PHPLOC\\Application",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "printVersion",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "help",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 10,
        "ccn": 8,
        "ccnMethodMax": 8,
        "externals": [
            "SebastianBergmann\\PHPLOC\\ArgumentsBuilder",
            "SebastianBergmann\\FileIterator\\Facade",
            "SebastianBergmann\\PHPLOC\\Analyser",
            "SebastianBergmann\\PHPLOC\\Log\\Text",
            "SebastianBergmann\\PHPLOC\\Log\\Csv",
            "SebastianBergmann\\PHPLOC\\Log\\Json",
            "SebastianBergmann\\PHPLOC\\Log\\Xml",
            "SebastianBergmann\\Version"
        ],
        "parents": [],
        "lcom": 1,
        "length": 67,
        "vocabulary": 20,
        "volume": 289.57,
        "difficulty": 7.5,
        "effort": 2171.77,
        "level": 0.13,
        "bugs": 0.1,
        "time": 121,
        "intelligentContent": 38.61,
        "number_operators": 22,
        "number_operands": 45,
        "number_operators_unique": 5,
        "number_operands_unique": 15,
        "cloc": 0,
        "loc": 72,
        "lloc": 65,
        "mi": 42.14,
        "mIwoC": 42.14,
        "commentWeight": 0,
        "kanDefect": 0.57,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 0.31,
        "relativeSystemComplexity": 256.31,
        "totalStructuralComplexity": 768,
        "totalDataComplexity": 0.94,
        "totalSystemComplexity": 768.94,
        "package": "SebastianBergmann\\PHPLOC\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 8,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "SebastianBergmann\\PHPLOC\\Arguments",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "directories",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "suffixes",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exclude",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "countTests",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "csvLogfile",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "jsonLogfile",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "xmlLogfile",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "help",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "version",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 9,
        "nbMethodsSetters": 0,
        "wmc": 10,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 54,
        "vocabulary": 12,
        "volume": 193.59,
        "difficulty": 3.6,
        "effort": 696.92,
        "level": 0.28,
        "bugs": 0.06,
        "time": 39,
        "intelligentContent": 53.77,
        "number_operators": 18,
        "number_operands": 36,
        "number_operators_unique": 2,
        "number_operands_unique": 10,
        "cloc": 36,
        "loc": 97,
        "lloc": 61,
        "mi": 85.4,
        "mIwoC": 44.91,
        "commentWeight": 40.49,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 9.9,
        "relativeSystemComplexity": 9.9,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 99,
        "totalSystemComplexity": 99,
        "package": "SebastianBergmann\\PHPLOC\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "SebastianBergmann\\PHPLOC\\ArgumentsBuilder",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "build",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 16,
        "ccn": 16,
        "ccnMethodMax": 16,
        "externals": [
            "SebastianBergmann\\PHPLOC\\Arguments",
            "SebastianBergmann\\CliParser\\Parser",
            "SebastianBergmann\\PHPLOC\\ArgumentsBuilderException",
            "SebastianBergmann\\PHPLOC\\ArgumentsBuilderException",
            "SebastianBergmann\\PHPLOC\\Arguments"
        ],
        "parents": [],
        "lcom": 1,
        "length": 100,
        "vocabulary": 41,
        "volume": 535.76,
        "difficulty": 6.51,
        "effort": 3490.06,
        "level": 0.15,
        "bugs": 0.18,
        "time": 194,
        "intelligentContent": 82.24,
        "number_operators": 24,
        "number_operands": 76,
        "number_operators_unique": 6,
        "number_operands_unique": 35,
        "cloc": 3,
        "loc": 58,
        "lloc": 55,
        "mi": 58.03,
        "mIwoC": 40.78,
        "commentWeight": 17.25,
        "kanDefect": 0.67,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 9.5,
        "totalStructuralComplexity": 9,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 9.5,
        "package": "SebastianBergmann\\PHPLOC\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "SebastianBergmann\\PHPLOC\\Collector",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getPublisher",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementLines",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementCommentLines",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementLogicalLines",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "currentClassReset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "currentClassStop",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "currentClassIncrementComplexity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "currentClassIncrementLines",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "currentMethodStart",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "currentClassIncrementMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "currentMethodIncrementComplexity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "currentMethodIncrementLines",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "currentMethodStop",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementFunctionLines",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementComplexity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addPossibleConstantAccesses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addConstant",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementGlobalVariableAccesses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementSuperGlobalVariableAccesses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementNonStaticAttributeAccesses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementStaticAttributeAccesses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementNonStaticMethodCalls",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementStaticMethodCalls",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addNamespace",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementInterfaces",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementTraits",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementAbstractClasses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementNonFinalClasses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementFinalClasses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementNonStaticMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementStaticMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementPublicMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementProtectedMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementPrivateMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementNamedFunctions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementAnonymousFunctions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementGlobalConstants",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementPublicClassConstants",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementNonPublicClassConstants",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementTestClasses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementTestMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUnique",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addToArray",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "increment",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "check",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 46,
        "nbMethods": 46,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 42,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 48,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "SebastianBergmann\\PHPLOC\\Publisher"
        ],
        "parents": [],
        "lcom": 1,
        "length": 161,
        "vocabulary": 54,
        "volume": 926.54,
        "difficulty": 7.55,
        "effort": 6996.3,
        "level": 0.13,
        "bugs": 0.31,
        "time": 389,
        "intelligentContent": 122.7,
        "number_operators": 13,
        "number_operands": 148,
        "number_operators_unique": 5,
        "number_operands_unique": 49,
        "cloc": 0,
        "loc": 209,
        "lloc": 209,
        "mi": 28.21,
        "mIwoC": 28.21,
        "commentWeight": 0,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.26,
        "relativeSystemComplexity": 16.26,
        "totalStructuralComplexity": 736,
        "totalDataComplexity": 12,
        "totalSystemComplexity": 748,
        "package": "SebastianBergmann\\PHPLOC\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "SebastianBergmann\\PHPLOC\\ArgumentsBuilderException",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "RuntimeException",
            "SebastianBergmann\\PHPLOC\\Exception"
        ],
        "parents": [
            "RuntimeException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "SebastianBergmann\\PHPLOC\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "SebastianBergmann\\PHPLOC\\RuntimeException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "RuntimeException",
            "SebastianBergmann\\PHPLOC\\Exception"
        ],
        "parents": [
            "RuntimeException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "SebastianBergmann\\PHPLOC\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "SebastianBergmann\\PHPLOC\\Log\\Csv",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "printResult",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getKeysLine",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValuesLine",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "InvalidArgumentException"
        ],
        "parents": [],
        "lcom": 1,
        "length": 137,
        "vocabulary": 116,
        "volume": 939.54,
        "difficulty": 2.27,
        "effort": 2130.75,
        "level": 0.44,
        "bugs": 0.31,
        "time": 118,
        "intelligentContent": 414.29,
        "number_operators": 10,
        "number_operands": 127,
        "number_operators_unique": 4,
        "number_operands_unique": 112,
        "cloc": 3,
        "loc": 28,
        "lloc": 25,
        "mi": 72.57,
        "mIwoC": 48.29,
        "commentWeight": 24.28,
        "kanDefect": 0.45,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.11,
        "relativeSystemComplexity": 5.11,
        "totalStructuralComplexity": 12,
        "totalDataComplexity": 3.33,
        "totalSystemComplexity": 15.33,
        "package": "SebastianBergmann\\PHPLOC\\Log\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "SebastianBergmann\\PHPLOC\\Log\\Json",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "printResult",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 27,
        "vocabulary": 9,
        "volume": 85.59,
        "difficulty": 5.5,
        "effort": 470.73,
        "level": 0.18,
        "bugs": 0.03,
        "time": 26,
        "intelligentContent": 15.56,
        "number_operators": 5,
        "number_operands": 22,
        "number_operators_unique": 3,
        "number_operands_unique": 6,
        "cloc": 0,
        "loc": 14,
        "lloc": 14,
        "mi": 61.2,
        "mIwoC": 61.2,
        "commentWeight": 0,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 2,
        "package": "SebastianBergmann\\PHPLOC\\Log\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "SebastianBergmann\\PHPLOC\\Log\\Text",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "printResult",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 31,
        "ccn": 31,
        "ccnMethodMax": 31,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 484,
        "vocabulary": 77,
        "volume": 3033.12,
        "difficulty": 16.31,
        "effort": 49469.84,
        "level": 0.06,
        "bugs": 1.01,
        "time": 2748,
        "intelligentContent": 185.97,
        "number_operators": 98,
        "number_operands": 386,
        "number_operators_unique": 6,
        "number_operands_unique": 71,
        "cloc": 0,
        "loc": 82,
        "lloc": 78,
        "mi": 30.18,
        "mIwoC": 30.18,
        "commentWeight": 0,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 2,
        "package": "SebastianBergmann\\PHPLOC\\Log\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "SebastianBergmann\\PHPLOC\\Log\\Xml",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "printResult",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "DOMDocument"
        ],
        "parents": [],
        "lcom": 1,
        "length": 45,
        "vocabulary": 16,
        "volume": 180,
        "difficulty": 4.62,
        "effort": 830.77,
        "level": 0.22,
        "bugs": 0.06,
        "time": 46,
        "intelligentContent": 39,
        "number_operators": 5,
        "number_operands": 40,
        "number_operators_unique": 3,
        "number_operands_unique": 13,
        "cloc": 1,
        "loc": 21,
        "lloc": 20,
        "mi": 72.01,
        "mIwoC": 55.42,
        "commentWeight": 16.58,
        "kanDefect": 0.45,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 9.5,
        "totalStructuralComplexity": 9,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 9.5,
        "package": "SebastianBergmann\\PHPLOC\\Log\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "SebastianBergmann\\PHPLOC\\Publisher",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDirectories",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFiles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLines",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCommentLines",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNonCommentLines",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLogicalLines",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClassLines",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAverageClassLength",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMinimumClassLength",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMaximumClassLength",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAverageMethodLength",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMinimumMethodLength",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMaximumMethodLength",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAverageMethodsPerClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMinimumMethodsPerClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMaximumMethodsPerClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFunctionLines",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAverageFunctionLength",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNotInClassesOrFunctions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getComplexity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMethodComplexity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAverageComplexityPerLogicalLine",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAverageComplexityPerClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMinimumClassComplexity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMaximumClassComplexity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAverageComplexityPerMethod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMinimumMethodComplexity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMaximumMethodComplexity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGlobalAccesses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGlobalConstantAccesses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGlobalVariableAccesses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSuperGlobalVariableAccesses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAttributeAccesses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNonStaticAttributeAccesses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStaticAttributeAccesses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMethodCalls",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNonStaticMethodCalls",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStaticMethodCalls",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNamespaces",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInterfaces",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTraits",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClasses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAbstractClasses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getConcreteClasses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFinalClasses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNonFinalClasses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNonStaticMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStaticMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPublicMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNonPublicMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProtectedMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPrivateMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFunctions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNamedFunctions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAnonymousFunctions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getConstants",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGlobalConstants",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPublicClassConstants",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNonPublicClassConstants",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClassConstants",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTestClasses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTestMethods",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAverage",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCount",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSum",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMaximum",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMinimum",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValue",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "divide",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 72,
        "nbMethods": 71,
        "nbMethodsPrivate": 7,
        "nbMethodsPublic": 64,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 78,
        "ccn": 7,
        "ccnMethodMax": 2,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 395,
        "vocabulary": 112,
        "volume": 2688.91,
        "difficulty": 10.17,
        "effort": 27337.2,
        "level": 0.1,
        "bugs": 0.9,
        "time": 1519,
        "intelligentContent": 264.48,
        "number_operators": 90,
        "number_operands": 305,
        "number_operators_unique": 7,
        "number_operands_unique": 105,
        "cloc": 0,
        "loc": 293,
        "lloc": 293,
        "mi": 21.23,
        "mIwoC": 21.23,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4900,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 4901,
        "totalStructuralComplexity": 352800,
        "totalDataComplexity": 72.14,
        "totalSystemComplexity": 352872.14,
        "package": "SebastianBergmann\\PHPLOC\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    }
]