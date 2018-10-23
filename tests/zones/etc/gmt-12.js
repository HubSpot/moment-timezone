"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-12"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-12", { offset: true, expect: "Asia/Kamchatka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-12", { abbr: true, expect: "Asia/Kamchatka" }),


};