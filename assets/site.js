"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('site/acceptance-tests/main', ['exports', 'ember-cli-sri/acceptance-tests/main'], function (exports, main) {

	'use strict';



	exports['default'] = main['default'];

});
define('site/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'site/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('site/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'site/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('site/components/gravatar-image', ['exports', 'ember-cli-gravatar/components/gravatar-image'], function (exports, gravatarImage) {

	'use strict';

	exports['default'] = gravatarImage['default'];

});
define('site/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('site/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('site/home/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "site/home/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","mdl-cell mdl-cell--6-col mdl-grid demo-card-wide mdl-card mdl-shadow--2dp");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","mdl-card__title");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3,"class","mdl-card__title-text");
        var el4 = dom.createTextNode("Google Maps Addon");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","mdl-card__supporting-text");
        var el3 = dom.createTextNode("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    Mauris sagittis pellentesque lacus eleifend lacinia...\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","mdl-card__actions mdl-card--border");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"class","mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        var el4 = dom.createTextNode("\n      Get Started\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","mdl-card__menu");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3,"class","mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4,"class","material-icons");
        var el5 = dom.createTextNode("share");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('site/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'site/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('site/initializers/export-application-global', ['exports', 'ember', 'site/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('site/router', ['exports', 'ember', 'site/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('home', { path: '/' });
  });

  exports['default'] = Router;

});
define('site/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "site/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("header");
        dom.setAttribute(el2,"class","demo-header mdl-layout__header mdl-color--white mdl-color-text--grey");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","mdl-layout__header-row");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","mdl-layout-title");
        var el5 = dom.createTextNode("Home");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","mdl-layout-spacer");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","demo-drawer mdl-layout__drawer ");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("header");
        dom.setAttribute(el3,"class","demo-drawer-header mdl-color--purple-900 mdl-color-text--purple-50");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h6");
        var el5 = dom.createTextNode("SamvelRaja S");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("nav");
        dom.setAttribute(el3,"class","demo-navigation mdl-navigation mdl-color--white");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"class","mdl-navigation__link mdl-color-text--grey");
        dom.setAttribute(el4,"href","");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","mdl-color-text--grey material-icons");
        dom.setAttribute(el5,"role","presentation");
        var el6 = dom.createTextNode("home");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("Home");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"class","mdl-navigation__link mdl-color-text--grey");
        dom.setAttribute(el4,"href","");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","mdl-color-text--grey material-icons");
        dom.setAttribute(el5,"role","presentation");
        var el6 = dom.createTextNode("people");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("Social");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","mdl-layout-spacer");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","mdl-navigation__sticky_link mdl-navigation__link mdl-color-text--grey");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","https://github.com/SamvelRaja");
        dom.setAttribute(el5,"style","text-decoration:none");
        dom.setAttribute(el5,"target","_blank");
        var el6 = dom.createTextNode("\n              ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","mdl-color-text--grey icons icon-github4");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"target","_blank");
        dom.setAttribute(el5,"href","https://www.linkedin.com/profile/view?id=AAMAAA9nMpABNxC2L6-1FYPhEgLzJTPRvjETjYw&trk=hp-identity-name");
        dom.setAttribute(el5,"style","text-decoration:none");
        var el6 = dom.createTextNode("\n              ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","mdl-color-text--grey icons icon-linkedin2");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"target","_blank");
        dom.setAttribute(el5,"href","https://twitter.com/samvelraja_s");
        dom.setAttribute(el5,"style","text-decoration:none");
        var el6 = dom.createTextNode("\n              ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","mdl-color-text--grey icons icon-twitter");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("main");
        dom.setAttribute(el2,"class","mdl-layout__content mdl-color--white");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","mdl-grid demo-content");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [3, 1]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [5, 1]),1,1);
        return morphs;
      },
      statements: [
        ["inline","gravatar-image",[],["email","kingsam91@gmail.com","size",30,"class","demo-avatar","retina",true],["loc",[null,[10,10],[13,40]]]],
        ["content","outlet",["loc",[null,[37,10],[37,20]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('site/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('site/tests/helpers/resolver', ['exports', 'ember/resolver', 'site/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('site/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('site/tests/helpers/start-app', ['exports', 'ember', 'site/app', 'site/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('site/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('site/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('site/tests/test-helper', ['site/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('site/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('site/config/environment', ['ember'], function(Ember) {
  var prefix = 'site';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("site/tests/test-helper");
} else {
  require("site/app")["default"].create({"name":"site","version":"0.0.0+3576db50"});
}

/* jshint ignore:end */
//# sourceMappingURL=site.map