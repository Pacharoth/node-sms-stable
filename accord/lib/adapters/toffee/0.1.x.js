// Generated by CoffeeScript 1.12.7
(function() {
  var Adapter, Toffee, W, fs,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Adapter = require('../../adapter_base');

  W = require('when');

  fs = require('fs');

  Toffee = (function(superClass) {
    var compile;

    extend(Toffee, superClass);

    function Toffee() {
      return Toffee.__super__.constructor.apply(this, arguments);
    }

    Toffee.prototype.name = 'toffee';

    Toffee.prototype.extensions = ['toffee'];

    Toffee.prototype.output = 'html';

    Toffee.prototype.supportedEngines = ['toffee'];

    Toffee.prototype._render = function(str, options) {
      return compile((function(_this) {
        return function() {
          return _this.engine.str_render(str, options, function(err, res) {
            if (res.indexOf("<div style=\"font-family:courier new;font-size:12px;color:#900;width:100%;\">") !== -1) {
              throw res;
            } else {
              return res;
            }
          });
        };
      })(this));
    };

    Toffee.prototype._compile = function(str, options) {
      return compile((function(_this) {
        return function() {
          return _this.engine.compileStr(str).toString();
        };
      })(this));
    };

    Toffee.prototype._compileClient = function(str, options) {
      return compile((function(_this) {
        return function() {
          return _this.engine.configurable_compile(str, options);
        };
      })(this));
    };

    compile = function(fn) {
      var err, res;
      try {
        res = fn();
      } catch (error) {
        err = error;
        return W.reject(err);
      }
      return W.resolve({
        result: res
      });
    };

    return Toffee;

  })(Adapter);

  module.exports = Toffee;

}).call(this);
