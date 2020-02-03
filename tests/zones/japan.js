"use strict";

var helpers = require("../helpers/helpers");

exports["Japan"] = {

	"guess:by:offset" : helpers.makeTestGuess("Japan", { offset: true, expect: "Asia/Tokyo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Japan", { abbr: true, expect: "Asia/Tokyo" }),

	"1948" : helpers.makeTestYear("Japan", [
		["1948-05-01T14:59:59+00:00", "23:59:59", "JST", -540],
		["1948-05-01T15:00:00+00:00", "01:00:00", "JDT", -600],
		["1948-09-11T13:59:59+00:00", "23:59:59", "JDT", -600],
		["1948-09-11T14:00:00+00:00", "23:00:00", "JST", -540]
	]),

	"1949" : helpers.makeTestYear("Japan", [
		["1949-04-02T14:59:59+00:00", "23:59:59", "JST", -540],
		["1949-04-02T15:00:00+00:00", "01:00:00", "JDT", -600],
		["1949-09-10T13:59:59+00:00", "23:59:59", "JDT", -600],
		["1949-09-10T14:00:00+00:00", "23:00:00", "JST", -540]
	]),

	"1950" : helpers.makeTestYear("Japan", [
		["1950-05-06T14:59:59+00:00", "23:59:59", "JST", -540],
		["1950-05-06T15:00:00+00:00", "01:00:00", "JDT", -600],
		["1950-09-09T13:59:59+00:00", "23:59:59", "JDT", -600],
		["1950-09-09T14:00:00+00:00", "23:00:00", "JST", -540]
	]),

	"1951" : helpers.makeTestYear("Japan", [
		["1951-05-05T14:59:59+00:00", "23:59:59", "JST", -540],
		["1951-05-05T15:00:00+00:00", "01:00:00", "JDT", -600],
		["1951-09-08T14:59:59+00:00", "00:59:59", "JDT", -600],
		["1951-09-08T15:00:00+00:00", "00:00:00", "JST", -540]
	])
};