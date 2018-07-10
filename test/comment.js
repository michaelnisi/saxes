"use strict";

require(".").test({
  name: "comment",
  xml: "<r><!--foo--><!----></r>",
  expect: [
    ["opentagstart", { name: "r", attributes: {} }],
    ["opentag", { name: "r", attributes: {}, isSelfClosing: false }],
    ["comment", "foo"],
    ["comment", ""],
    ["closetag", "r"],
  ],
});