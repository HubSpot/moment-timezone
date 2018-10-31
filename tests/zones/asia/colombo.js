"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Colombo"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Colombo", { offset: true, expect: "Asia/Kolkata" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Colombo", { abbr: true, expect: "Asia/Kolkata" }),

	"1905" : helpers.makeTestYear("Asia/Colombo", [
		["1905-12-31T18:40:27+00:00", "23:59:59", "MMT", -19172 / 60],
		["1905-12-31T18:40:28+00:00", "00:10:28", "+0530", -330]
	]),

	"1942" : helpers.makeTestYear("Asia/Colombo", [
		["1942-01-04T18:29:59+00:00", "23:59:59", "+0530", -330],
		["1942-01-04T18:30:00+00:00", "00:30:00", "+06", -360],
		["1942-08-31T17:59:59+00:00", "23:59:59", "+06", -360],
		["1942-08-31T18:00:00+00:00", "00:30:00", "+0630", -390]
	]),

	"1945" : helpers.makeTestYear("Asia/Colombo", [
		["1945-10-15T19:29:59+00:00", "01:59:59", "+0630", -390],
		["1945-10-15T19:30:00+00:00", "01:00:00", "+0530", -330]
	]),

	"1996" : helpers.makeTestYear("Asia/Colombo", [
		["1996-05-24T18:29:59+00:00", "23:59:59", "+0530", -330],
		["1996-05-24T18:30:00+00:00", "01:00:00", "+0630", -390],
		["1996-10-25T17:59:59+00:00", "00:29:59", "+0630", -390],
		["1996-10-25T18:00:00+00:00", "00:00:00", "+06", -360]
	])
};