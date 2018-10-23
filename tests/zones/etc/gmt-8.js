"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-8"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-8", { offset: true, expect: "Asia/Manila" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-8", { abbr: true, expect: "Asia/Manila" }),


};