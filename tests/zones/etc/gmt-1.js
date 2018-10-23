"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-1"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-1", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-1", { abbr: true, expect: "Africa/Lagos" }),


};