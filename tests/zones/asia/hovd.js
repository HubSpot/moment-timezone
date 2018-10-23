"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Hovd"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Hovd", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Hovd", { abbr: true }),

	"1905" : helpers.makeTestYear("Asia/Hovd", [
		["1905-07-31T17:53:23+00:00", "23:59:59", "LMT", -21996 / 60],
		["1905-07-31T17:53:24+00:00", "23:53:24", "+06", -360]
	]),

	"1977" : helpers.makeTestYear("Asia/Hovd", [
		["1977-12-31T17:59:59+00:00", "23:59:59", "+06", -360],
		["1977-12-31T18:00:00+00:00", "01:00:00", "+07", -420]
	]),

	"1983" : helpers.makeTestYear("Asia/Hovd", [
		["1983-03-31T16:59:59+00:00", "23:59:59", "+07", -420],
		["1983-03-31T17:00:00+00:00", "01:00:00", "+08", -480],
		["1983-09-30T15:59:59+00:00", "23:59:59", "+08", -480],
		["1983-09-30T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1984" : helpers.makeTestYear("Asia/Hovd", [
		["1984-03-31T16:59:59+00:00", "23:59:59", "+07", -420],
		["1984-03-31T17:00:00+00:00", "01:00:00", "+08", -480],
		["1984-09-29T15:59:59+00:00", "23:59:59", "+08", -480],
		["1984-09-29T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1985" : helpers.makeTestYear("Asia/Hovd", [
		["1985-03-30T16:59:59+00:00", "23:59:59", "+07", -420],
		["1985-03-30T17:00:00+00:00", "01:00:00", "+08", -480],
		["1985-09-28T15:59:59+00:00", "23:59:59", "+08", -480],
		["1985-09-28T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1986" : helpers.makeTestYear("Asia/Hovd", [
		["1986-03-29T16:59:59+00:00", "23:59:59", "+07", -420],
		["1986-03-29T17:00:00+00:00", "01:00:00", "+08", -480],
		["1986-09-27T15:59:59+00:00", "23:59:59", "+08", -480],
		["1986-09-27T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1987" : helpers.makeTestYear("Asia/Hovd", [
		["1987-03-28T16:59:59+00:00", "23:59:59", "+07", -420],
		["1987-03-28T17:00:00+00:00", "01:00:00", "+08", -480],
		["1987-09-26T15:59:59+00:00", "23:59:59", "+08", -480],
		["1987-09-26T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1988" : helpers.makeTestYear("Asia/Hovd", [
		["1988-03-26T16:59:59+00:00", "23:59:59", "+07", -420],
		["1988-03-26T17:00:00+00:00", "01:00:00", "+08", -480],
		["1988-09-24T15:59:59+00:00", "23:59:59", "+08", -480],
		["1988-09-24T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1989" : helpers.makeTestYear("Asia/Hovd", [
		["1989-03-25T16:59:59+00:00", "23:59:59", "+07", -420],
		["1989-03-25T17:00:00+00:00", "01:00:00", "+08", -480],
		["1989-09-23T15:59:59+00:00", "23:59:59", "+08", -480],
		["1989-09-23T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1990" : helpers.makeTestYear("Asia/Hovd", [
		["1990-03-24T16:59:59+00:00", "23:59:59", "+07", -420],
		["1990-03-24T17:00:00+00:00", "01:00:00", "+08", -480],
		["1990-09-29T15:59:59+00:00", "23:59:59", "+08", -480],
		["1990-09-29T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1991" : helpers.makeTestYear("Asia/Hovd", [
		["1991-03-30T16:59:59+00:00", "23:59:59", "+07", -420],
		["1991-03-30T17:00:00+00:00", "01:00:00", "+08", -480],
		["1991-09-28T15:59:59+00:00", "23:59:59", "+08", -480],
		["1991-09-28T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1992" : helpers.makeTestYear("Asia/Hovd", [
		["1992-03-28T16:59:59+00:00", "23:59:59", "+07", -420],
		["1992-03-28T17:00:00+00:00", "01:00:00", "+08", -480],
		["1992-09-26T15:59:59+00:00", "23:59:59", "+08", -480],
		["1992-09-26T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1993" : helpers.makeTestYear("Asia/Hovd", [
		["1993-03-27T16:59:59+00:00", "23:59:59", "+07", -420],
		["1993-03-27T17:00:00+00:00", "01:00:00", "+08", -480],
		["1993-09-25T15:59:59+00:00", "23:59:59", "+08", -480],
		["1993-09-25T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1994" : helpers.makeTestYear("Asia/Hovd", [
		["1994-03-26T16:59:59+00:00", "23:59:59", "+07", -420],
		["1994-03-26T17:00:00+00:00", "01:00:00", "+08", -480],
		["1994-09-24T15:59:59+00:00", "23:59:59", "+08", -480],
		["1994-09-24T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1995" : helpers.makeTestYear("Asia/Hovd", [
		["1995-03-25T16:59:59+00:00", "23:59:59", "+07", -420],
		["1995-03-25T17:00:00+00:00", "01:00:00", "+08", -480],
		["1995-09-23T15:59:59+00:00", "23:59:59", "+08", -480],
		["1995-09-23T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1996" : helpers.makeTestYear("Asia/Hovd", [
		["1996-03-30T16:59:59+00:00", "23:59:59", "+07", -420],
		["1996-03-30T17:00:00+00:00", "01:00:00", "+08", -480],
		["1996-09-28T15:59:59+00:00", "23:59:59", "+08", -480],
		["1996-09-28T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1997" : helpers.makeTestYear("Asia/Hovd", [
		["1997-03-29T16:59:59+00:00", "23:59:59", "+07", -420],
		["1997-03-29T17:00:00+00:00", "01:00:00", "+08", -480],
		["1997-09-27T15:59:59+00:00", "23:59:59", "+08", -480],
		["1997-09-27T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"1998" : helpers.makeTestYear("Asia/Hovd", [
		["1998-03-28T16:59:59+00:00", "23:59:59", "+07", -420],
		["1998-03-28T17:00:00+00:00", "01:00:00", "+08", -480],
		["1998-09-26T15:59:59+00:00", "23:59:59", "+08", -480],
		["1998-09-26T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"2001" : helpers.makeTestYear("Asia/Hovd", [
		["2001-04-27T18:59:59+00:00", "01:59:59", "+07", -420],
		["2001-04-27T19:00:00+00:00", "03:00:00", "+08", -480],
		["2001-09-28T17:59:59+00:00", "01:59:59", "+08", -480],
		["2001-09-28T18:00:00+00:00", "01:00:00", "+07", -420]
	]),

	"2002" : helpers.makeTestYear("Asia/Hovd", [
		["2002-03-29T18:59:59+00:00", "01:59:59", "+07", -420],
		["2002-03-29T19:00:00+00:00", "03:00:00", "+08", -480],
		["2002-09-27T17:59:59+00:00", "01:59:59", "+08", -480],
		["2002-09-27T18:00:00+00:00", "01:00:00", "+07", -420]
	]),

	"2003" : helpers.makeTestYear("Asia/Hovd", [
		["2003-03-28T18:59:59+00:00", "01:59:59", "+07", -420],
		["2003-03-28T19:00:00+00:00", "03:00:00", "+08", -480],
		["2003-09-26T17:59:59+00:00", "01:59:59", "+08", -480],
		["2003-09-26T18:00:00+00:00", "01:00:00", "+07", -420]
	]),

	"2004" : helpers.makeTestYear("Asia/Hovd", [
		["2004-03-26T18:59:59+00:00", "01:59:59", "+07", -420],
		["2004-03-26T19:00:00+00:00", "03:00:00", "+08", -480],
		["2004-09-24T17:59:59+00:00", "01:59:59", "+08", -480],
		["2004-09-24T18:00:00+00:00", "01:00:00", "+07", -420]
	]),

	"2005" : helpers.makeTestYear("Asia/Hovd", [
		["2005-03-25T18:59:59+00:00", "01:59:59", "+07", -420],
		["2005-03-25T19:00:00+00:00", "03:00:00", "+08", -480],
		["2005-09-23T17:59:59+00:00", "01:59:59", "+08", -480],
		["2005-09-23T18:00:00+00:00", "01:00:00", "+07", -420]
	]),

	"2006" : helpers.makeTestYear("Asia/Hovd", [
		["2006-03-24T18:59:59+00:00", "01:59:59", "+07", -420],
		["2006-03-24T19:00:00+00:00", "03:00:00", "+08", -480],
		["2006-09-29T17:59:59+00:00", "01:59:59", "+08", -480],
		["2006-09-29T18:00:00+00:00", "01:00:00", "+07", -420]
	]),

	"2015" : helpers.makeTestYear("Asia/Hovd", [
		["2015-03-27T18:59:59+00:00", "01:59:59", "+07", -420],
		["2015-03-27T19:00:00+00:00", "03:00:00", "+08", -480],
		["2015-09-25T15:59:59+00:00", "23:59:59", "+08", -480],
		["2015-09-25T16:00:00+00:00", "23:00:00", "+07", -420]
	]),

	"2016" : helpers.makeTestYear("Asia/Hovd", [
		["2016-03-25T18:59:59+00:00", "01:59:59", "+07", -420],
		["2016-03-25T19:00:00+00:00", "03:00:00", "+08", -480],
		["2016-09-23T15:59:59+00:00", "23:59:59", "+08", -480],
		["2016-09-23T16:00:00+00:00", "23:00:00", "+07", -420]
	])
};