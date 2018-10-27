"use strict";

var helpers = require("../../helpers/helpers");

exports["Europe/Astrakhan"] = {

	"guess:by:offset" : helpers.makeTestGuess("Europe/Astrakhan", { offset: true, expect: "Europe/Ulyanovsk" }),

	"guess:by:abbr" : helpers.makeTestGuess("Europe/Astrakhan", { abbr: true, expect: "Europe/Ulyanovsk" }),

	"1924" : helpers.makeTestYear("Europe/Astrakhan", [
		["1924-04-30T20:47:47+00:00", "23:59:59", "LMT", -11532 / 60],
		["1924-04-30T20:47:48+00:00", "23:47:48", "+03", -180]
	]),

	"1930" : helpers.makeTestYear("Europe/Astrakhan", [
		["1930-06-20T20:59:59+00:00", "23:59:59", "+03", -180],
		["1930-06-20T21:00:00+00:00", "01:00:00", "+04", -240]
	]),

	"1981" : helpers.makeTestYear("Europe/Astrakhan", [
		["1981-03-31T19:59:59+00:00", "23:59:59", "+04", -240],
		["1981-03-31T20:00:00+00:00", "01:00:00", "+05", -300],
		["1981-09-30T18:59:59+00:00", "23:59:59", "+05", -300],
		["1981-09-30T19:00:00+00:00", "23:00:00", "+04", -240]
	]),

	"1982" : helpers.makeTestYear("Europe/Astrakhan", [
		["1982-03-31T19:59:59+00:00", "23:59:59", "+04", -240],
		["1982-03-31T20:00:00+00:00", "01:00:00", "+05", -300],
		["1982-09-30T18:59:59+00:00", "23:59:59", "+05", -300],
		["1982-09-30T19:00:00+00:00", "23:00:00", "+04", -240]
	]),

	"1983" : helpers.makeTestYear("Europe/Astrakhan", [
		["1983-03-31T19:59:59+00:00", "23:59:59", "+04", -240],
		["1983-03-31T20:00:00+00:00", "01:00:00", "+05", -300],
		["1983-09-30T18:59:59+00:00", "23:59:59", "+05", -300],
		["1983-09-30T19:00:00+00:00", "23:00:00", "+04", -240]
	]),

	"1984" : helpers.makeTestYear("Europe/Astrakhan", [
		["1984-03-31T19:59:59+00:00", "23:59:59", "+04", -240],
		["1984-03-31T20:00:00+00:00", "01:00:00", "+05", -300],
		["1984-09-29T21:59:59+00:00", "02:59:59", "+05", -300],
		["1984-09-29T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1985" : helpers.makeTestYear("Europe/Astrakhan", [
		["1985-03-30T21:59:59+00:00", "01:59:59", "+04", -240],
		["1985-03-30T22:00:00+00:00", "03:00:00", "+05", -300],
		["1985-09-28T21:59:59+00:00", "02:59:59", "+05", -300],
		["1985-09-28T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1986" : helpers.makeTestYear("Europe/Astrakhan", [
		["1986-03-29T21:59:59+00:00", "01:59:59", "+04", -240],
		["1986-03-29T22:00:00+00:00", "03:00:00", "+05", -300],
		["1986-09-27T21:59:59+00:00", "02:59:59", "+05", -300],
		["1986-09-27T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1987" : helpers.makeTestYear("Europe/Astrakhan", [
		["1987-03-28T21:59:59+00:00", "01:59:59", "+04", -240],
		["1987-03-28T22:00:00+00:00", "03:00:00", "+05", -300],
		["1987-09-26T21:59:59+00:00", "02:59:59", "+05", -300],
		["1987-09-26T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1988" : helpers.makeTestYear("Europe/Astrakhan", [
		["1988-03-26T21:59:59+00:00", "01:59:59", "+04", -240],
		["1988-03-26T22:00:00+00:00", "03:00:00", "+05", -300],
		["1988-09-24T21:59:59+00:00", "02:59:59", "+05", -300],
		["1988-09-24T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1989" : helpers.makeTestYear("Europe/Astrakhan", [
		["1989-03-25T21:59:59+00:00", "01:59:59", "+04", -240],
		["1989-03-25T22:00:00+00:00", "02:00:00", "+04", -240],
		["1989-09-23T22:59:59+00:00", "02:59:59", "+04", -240],
		["1989-09-23T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"1990" : helpers.makeTestYear("Europe/Astrakhan", [
		["1990-03-24T22:59:59+00:00", "01:59:59", "+03", -180],
		["1990-03-24T23:00:00+00:00", "03:00:00", "+04", -240],
		["1990-09-29T22:59:59+00:00", "02:59:59", "+04", -240],
		["1990-09-29T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"1991" : helpers.makeTestYear("Europe/Astrakhan", [
		["1991-03-30T22:59:59+00:00", "01:59:59", "+03", -180],
		["1991-03-30T23:00:00+00:00", "03:00:00", "+04", -240]
	]),

	"1992" : helpers.makeTestYear("Europe/Astrakhan", [
		["1992-03-28T21:59:59+00:00", "01:59:59", "+04", -240],
		["1992-03-28T22:00:00+00:00", "02:00:00", "+04", -240],
		["1992-09-26T22:59:59+00:00", "02:59:59", "+04", -240],
		["1992-09-26T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"1993" : helpers.makeTestYear("Europe/Astrakhan", [
		["1993-03-27T22:59:59+00:00", "01:59:59", "+03", -180],
		["1993-03-27T23:00:00+00:00", "03:00:00", "+04", -240],
		["1993-09-25T22:59:59+00:00", "02:59:59", "+04", -240],
		["1993-09-25T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"1994" : helpers.makeTestYear("Europe/Astrakhan", [
		["1994-03-26T22:59:59+00:00", "01:59:59", "+03", -180],
		["1994-03-26T23:00:00+00:00", "03:00:00", "+04", -240],
		["1994-09-24T22:59:59+00:00", "02:59:59", "+04", -240],
		["1994-09-24T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"1995" : helpers.makeTestYear("Europe/Astrakhan", [
		["1995-03-25T22:59:59+00:00", "01:59:59", "+03", -180],
		["1995-03-25T23:00:00+00:00", "03:00:00", "+04", -240],
		["1995-09-23T22:59:59+00:00", "02:59:59", "+04", -240],
		["1995-09-23T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"1996" : helpers.makeTestYear("Europe/Astrakhan", [
		["1996-03-30T22:59:59+00:00", "01:59:59", "+03", -180],
		["1996-03-30T23:00:00+00:00", "03:00:00", "+04", -240],
		["1996-10-26T22:59:59+00:00", "02:59:59", "+04", -240],
		["1996-10-26T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"1997" : helpers.makeTestYear("Europe/Astrakhan", [
		["1997-03-29T22:59:59+00:00", "01:59:59", "+03", -180],
		["1997-03-29T23:00:00+00:00", "03:00:00", "+04", -240],
		["1997-10-25T22:59:59+00:00", "02:59:59", "+04", -240],
		["1997-10-25T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"1998" : helpers.makeTestYear("Europe/Astrakhan", [
		["1998-03-28T22:59:59+00:00", "01:59:59", "+03", -180],
		["1998-03-28T23:00:00+00:00", "03:00:00", "+04", -240],
		["1998-10-24T22:59:59+00:00", "02:59:59", "+04", -240],
		["1998-10-24T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"1999" : helpers.makeTestYear("Europe/Astrakhan", [
		["1999-03-27T22:59:59+00:00", "01:59:59", "+03", -180],
		["1999-03-27T23:00:00+00:00", "03:00:00", "+04", -240],
		["1999-10-30T22:59:59+00:00", "02:59:59", "+04", -240],
		["1999-10-30T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"2000" : helpers.makeTestYear("Europe/Astrakhan", [
		["2000-03-25T22:59:59+00:00", "01:59:59", "+03", -180],
		["2000-03-25T23:00:00+00:00", "03:00:00", "+04", -240],
		["2000-10-28T22:59:59+00:00", "02:59:59", "+04", -240],
		["2000-10-28T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"2001" : helpers.makeTestYear("Europe/Astrakhan", [
		["2001-03-24T22:59:59+00:00", "01:59:59", "+03", -180],
		["2001-03-24T23:00:00+00:00", "03:00:00", "+04", -240],
		["2001-10-27T22:59:59+00:00", "02:59:59", "+04", -240],
		["2001-10-27T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"2002" : helpers.makeTestYear("Europe/Astrakhan", [
		["2002-03-30T22:59:59+00:00", "01:59:59", "+03", -180],
		["2002-03-30T23:00:00+00:00", "03:00:00", "+04", -240],
		["2002-10-26T22:59:59+00:00", "02:59:59", "+04", -240],
		["2002-10-26T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"2003" : helpers.makeTestYear("Europe/Astrakhan", [
		["2003-03-29T22:59:59+00:00", "01:59:59", "+03", -180],
		["2003-03-29T23:00:00+00:00", "03:00:00", "+04", -240],
		["2003-10-25T22:59:59+00:00", "02:59:59", "+04", -240],
		["2003-10-25T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"2004" : helpers.makeTestYear("Europe/Astrakhan", [
		["2004-03-27T22:59:59+00:00", "01:59:59", "+03", -180],
		["2004-03-27T23:00:00+00:00", "03:00:00", "+04", -240],
		["2004-10-30T22:59:59+00:00", "02:59:59", "+04", -240],
		["2004-10-30T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"2005" : helpers.makeTestYear("Europe/Astrakhan", [
		["2005-03-26T22:59:59+00:00", "01:59:59", "+03", -180],
		["2005-03-26T23:00:00+00:00", "03:00:00", "+04", -240],
		["2005-10-29T22:59:59+00:00", "02:59:59", "+04", -240],
		["2005-10-29T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"2006" : helpers.makeTestYear("Europe/Astrakhan", [
		["2006-03-25T22:59:59+00:00", "01:59:59", "+03", -180],
		["2006-03-25T23:00:00+00:00", "03:00:00", "+04", -240],
		["2006-10-28T22:59:59+00:00", "02:59:59", "+04", -240],
		["2006-10-28T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"2007" : helpers.makeTestYear("Europe/Astrakhan", [
		["2007-03-24T22:59:59+00:00", "01:59:59", "+03", -180],
		["2007-03-24T23:00:00+00:00", "03:00:00", "+04", -240],
		["2007-10-27T22:59:59+00:00", "02:59:59", "+04", -240],
		["2007-10-27T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"2008" : helpers.makeTestYear("Europe/Astrakhan", [
		["2008-03-29T22:59:59+00:00", "01:59:59", "+03", -180],
		["2008-03-29T23:00:00+00:00", "03:00:00", "+04", -240],
		["2008-10-25T22:59:59+00:00", "02:59:59", "+04", -240],
		["2008-10-25T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"2009" : helpers.makeTestYear("Europe/Astrakhan", [
		["2009-03-28T22:59:59+00:00", "01:59:59", "+03", -180],
		["2009-03-28T23:00:00+00:00", "03:00:00", "+04", -240],
		["2009-10-24T22:59:59+00:00", "02:59:59", "+04", -240],
		["2009-10-24T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"2010" : helpers.makeTestYear("Europe/Astrakhan", [
		["2010-03-27T22:59:59+00:00", "01:59:59", "+03", -180],
		["2010-03-27T23:00:00+00:00", "03:00:00", "+04", -240],
		["2010-10-30T22:59:59+00:00", "02:59:59", "+04", -240],
		["2010-10-30T23:00:00+00:00", "02:00:00", "+03", -180]
	]),

	"2011" : helpers.makeTestYear("Europe/Astrakhan", [
		["2011-03-26T22:59:59+00:00", "01:59:59", "+03", -180],
		["2011-03-26T23:00:00+00:00", "03:00:00", "+04", -240]
	]),

	"2014" : helpers.makeTestYear("Europe/Astrakhan", [
		["2014-10-25T21:59:59+00:00", "01:59:59", "+04", -240],
		["2014-10-25T22:00:00+00:00", "01:00:00", "+03", -180]
	]),

	"2016" : helpers.makeTestYear("Europe/Astrakhan", [
		["2016-03-26T22:59:59+00:00", "01:59:59", "+03", -180],
		["2016-03-26T23:00:00+00:00", "03:00:00", "+04", -240]
	])
};