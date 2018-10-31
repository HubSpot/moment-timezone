"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Casablanca"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Casablanca", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Casablanca", { abbr: true }),

	"1939" : helpers.makeTestYear("Africa/Casablanca", [
		["1939-09-11T23:59:59+00:00", "23:59:59", "+00", 0],
		["1939-09-12T00:00:00+00:00", "01:00:00", "+01", -60],
		["1939-11-18T22:59:59+00:00", "23:59:59", "+01", -60],
		["1939-11-18T23:00:00+00:00", "23:00:00", "+00", 0]
	]),

	"1940" : helpers.makeTestYear("Africa/Casablanca", [
		["1940-02-24T23:59:59+00:00", "23:59:59", "+00", 0],
		["1940-02-25T00:00:00+00:00", "01:00:00", "+01", -60]
	]),

	"1945" : helpers.makeTestYear("Africa/Casablanca", [
		["1945-11-17T22:59:59+00:00", "23:59:59", "+01", -60],
		["1945-11-17T23:00:00+00:00", "23:00:00", "+00", 0]
	]),

	"1950" : helpers.makeTestYear("Africa/Casablanca", [
		["1950-06-10T23:59:59+00:00", "23:59:59", "+00", 0],
		["1950-06-11T00:00:00+00:00", "01:00:00", "+01", -60],
		["1950-10-28T22:59:59+00:00", "23:59:59", "+01", -60],
		["1950-10-28T23:00:00+00:00", "23:00:00", "+00", 0]
	]),

	"1967" : helpers.makeTestYear("Africa/Casablanca", [
		["1967-06-03T11:59:59+00:00", "11:59:59", "+00", 0],
		["1967-06-03T12:00:00+00:00", "13:00:00", "+01", -60],
		["1967-09-30T22:59:59+00:00", "23:59:59", "+01", -60],
		["1967-09-30T23:00:00+00:00", "23:00:00", "+00", 0]
	]),

	"1974" : helpers.makeTestYear("Africa/Casablanca", [
		["1974-06-23T23:59:59+00:00", "23:59:59", "+00", 0],
		["1974-06-24T00:00:00+00:00", "01:00:00", "+01", -60],
		["1974-08-31T22:59:59+00:00", "23:59:59", "+01", -60],
		["1974-08-31T23:00:00+00:00", "23:00:00", "+00", 0]
	]),

	"1976" : helpers.makeTestYear("Africa/Casablanca", [
		["1976-04-30T23:59:59+00:00", "23:59:59", "+00", 0],
		["1976-05-01T00:00:00+00:00", "01:00:00", "+01", -60],
		["1976-07-31T22:59:59+00:00", "23:59:59", "+01", -60],
		["1976-07-31T23:00:00+00:00", "23:00:00", "+00", 0]
	]),

	"1977" : helpers.makeTestYear("Africa/Casablanca", [
		["1977-04-30T23:59:59+00:00", "23:59:59", "+00", 0],
		["1977-05-01T00:00:00+00:00", "01:00:00", "+01", -60],
		["1977-09-27T22:59:59+00:00", "23:59:59", "+01", -60],
		["1977-09-27T23:00:00+00:00", "23:00:00", "+00", 0]
	]),

	"1978" : helpers.makeTestYear("Africa/Casablanca", [
		["1978-05-31T23:59:59+00:00", "23:59:59", "+00", 0],
		["1978-06-01T00:00:00+00:00", "01:00:00", "+01", -60],
		["1978-08-03T22:59:59+00:00", "23:59:59", "+01", -60],
		["1978-08-03T23:00:00+00:00", "23:00:00", "+00", 0]
	]),

	"1984" : helpers.makeTestYear("Africa/Casablanca", [
		["1984-03-15T23:59:59+00:00", "23:59:59", "+00", 0],
		["1984-03-16T00:00:00+00:00", "01:00:00", "+01", -60]
	]),

	"1985" : helpers.makeTestYear("Africa/Casablanca", [
		["1985-12-31T22:59:59+00:00", "23:59:59", "+01", -60],
		["1985-12-31T23:00:00+00:00", "23:00:00", "+00", 0]
	]),

	"2008" : helpers.makeTestYear("Africa/Casablanca", [
		["2008-05-31T23:59:59+00:00", "23:59:59", "+00", 0],
		["2008-06-01T00:00:00+00:00", "01:00:00", "+01", -60],
		["2008-08-31T22:59:59+00:00", "23:59:59", "+01", -60],
		["2008-08-31T23:00:00+00:00", "23:00:00", "+00", 0]
	]),

	"2009" : helpers.makeTestYear("Africa/Casablanca", [
		["2009-05-31T23:59:59+00:00", "23:59:59", "+00", 0],
		["2009-06-01T00:00:00+00:00", "01:00:00", "+01", -60],
		["2009-08-20T22:59:59+00:00", "23:59:59", "+01", -60],
		["2009-08-20T23:00:00+00:00", "23:00:00", "+00", 0]
	]),

	"2010" : helpers.makeTestYear("Africa/Casablanca", [
		["2010-05-01T23:59:59+00:00", "23:59:59", "+00", 0],
		["2010-05-02T00:00:00+00:00", "01:00:00", "+01", -60],
		["2010-08-07T22:59:59+00:00", "23:59:59", "+01", -60],
		["2010-08-07T23:00:00+00:00", "23:00:00", "+00", 0]
	]),

	"2011" : helpers.makeTestYear("Africa/Casablanca", [
		["2011-04-02T23:59:59+00:00", "23:59:59", "+00", 0],
		["2011-04-03T00:00:00+00:00", "01:00:00", "+01", -60],
		["2011-07-30T22:59:59+00:00", "23:59:59", "+01", -60],
		["2011-07-30T23:00:00+00:00", "23:00:00", "+00", 0]
	]),

	"2012" : helpers.makeTestYear("Africa/Casablanca", [
		["2012-04-29T01:59:59+00:00", "01:59:59", "+00", 0],
		["2012-04-29T02:00:00+00:00", "03:00:00", "+01", -60],
		["2012-07-20T01:59:59+00:00", "02:59:59", "+01", -60],
		["2012-07-20T02:00:00+00:00", "02:00:00", "+00", 0],
		["2012-08-20T01:59:59+00:00", "01:59:59", "+00", 0],
		["2012-08-20T02:00:00+00:00", "03:00:00", "+01", -60],
		["2012-09-30T01:59:59+00:00", "02:59:59", "+01", -60],
		["2012-09-30T02:00:00+00:00", "02:00:00", "+00", 0]
	]),

	"2013" : helpers.makeTestYear("Africa/Casablanca", [
		["2013-04-28T01:59:59+00:00", "01:59:59", "+00", 0],
		["2013-04-28T02:00:00+00:00", "03:00:00", "+01", -60],
		["2013-07-07T01:59:59+00:00", "02:59:59", "+01", -60],
		["2013-07-07T02:00:00+00:00", "02:00:00", "+00", 0],
		["2013-08-10T01:59:59+00:00", "01:59:59", "+00", 0],
		["2013-08-10T02:00:00+00:00", "03:00:00", "+01", -60],
		["2013-10-27T01:59:59+00:00", "02:59:59", "+01", -60],
		["2013-10-27T02:00:00+00:00", "02:00:00", "+00", 0]
	]),

	"2014" : helpers.makeTestYear("Africa/Casablanca", [
		["2014-03-30T01:59:59+00:00", "01:59:59", "+00", 0],
		["2014-03-30T02:00:00+00:00", "03:00:00", "+01", -60],
		["2014-06-28T01:59:59+00:00", "02:59:59", "+01", -60],
		["2014-06-28T02:00:00+00:00", "02:00:00", "+00", 0],
		["2014-08-02T01:59:59+00:00", "01:59:59", "+00", 0],
		["2014-08-02T02:00:00+00:00", "03:00:00", "+01", -60],
		["2014-10-26T01:59:59+00:00", "02:59:59", "+01", -60],
		["2014-10-26T02:00:00+00:00", "02:00:00", "+00", 0]
	]),

	"2015" : helpers.makeTestYear("Africa/Casablanca", [
		["2015-03-29T01:59:59+00:00", "01:59:59", "+00", 0],
		["2015-03-29T02:00:00+00:00", "03:00:00", "+01", -60],
		["2015-06-14T01:59:59+00:00", "02:59:59", "+01", -60],
		["2015-06-14T02:00:00+00:00", "02:00:00", "+00", 0],
		["2015-07-19T01:59:59+00:00", "01:59:59", "+00", 0],
		["2015-07-19T02:00:00+00:00", "03:00:00", "+01", -60],
		["2015-10-25T01:59:59+00:00", "02:59:59", "+01", -60],
		["2015-10-25T02:00:00+00:00", "02:00:00", "+00", 0]
	]),

	"2016" : helpers.makeTestYear("Africa/Casablanca", [
		["2016-03-27T01:59:59+00:00", "01:59:59", "+00", 0],
		["2016-03-27T02:00:00+00:00", "03:00:00", "+01", -60],
		["2016-06-05T01:59:59+00:00", "02:59:59", "+01", -60],
		["2016-06-05T02:00:00+00:00", "02:00:00", "+00", 0],
		["2016-07-10T01:59:59+00:00", "01:59:59", "+00", 0],
		["2016-07-10T02:00:00+00:00", "03:00:00", "+01", -60],
		["2016-10-30T01:59:59+00:00", "02:59:59", "+01", -60],
		["2016-10-30T02:00:00+00:00", "02:00:00", "+00", 0]
	]),

	"2017" : helpers.makeTestYear("Africa/Casablanca", [
		["2017-03-26T01:59:59+00:00", "01:59:59", "+00", 0],
		["2017-03-26T02:00:00+00:00", "03:00:00", "+01", -60],
		["2017-05-21T01:59:59+00:00", "02:59:59", "+01", -60],
		["2017-05-21T02:00:00+00:00", "02:00:00", "+00", 0],
		["2017-07-02T01:59:59+00:00", "01:59:59", "+00", 0],
		["2017-07-02T02:00:00+00:00", "03:00:00", "+01", -60],
		["2017-10-29T01:59:59+00:00", "02:59:59", "+01", -60],
		["2017-10-29T02:00:00+00:00", "02:00:00", "+00", 0]
	]),

	"2018" : helpers.makeTestYear("Africa/Casablanca", [
		["2018-03-25T01:59:59+00:00", "01:59:59", "+00", 0],
		["2018-03-25T02:00:00+00:00", "03:00:00", "+01", -60],
		["2018-05-13T01:59:59+00:00", "02:59:59", "+01", -60],
		["2018-05-13T02:00:00+00:00", "02:00:00", "+00", 0],
		["2018-06-17T01:59:59+00:00", "01:59:59", "+00", 0],
		["2018-06-17T02:00:00+00:00", "03:00:00", "+01", -60]
	])
};