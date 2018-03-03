"use strict";
exports.__esModule = true;
var Baidumap = (function () {
  function Baidumap() {}
  Baidumap.prototype.initmap = function () {
    baidumap_location.getCurrentPosition(function (result) {
              return result;
            }, function (error) {
                return error
        });
  };
  return Baidumap;
}());
exports.Baidumap = Baidumap;
