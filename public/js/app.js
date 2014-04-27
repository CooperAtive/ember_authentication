App = Ember.Application.create();

App.initializer({
    name: 'authentication',
    initialize: function(container, application) {
        Ember.SimpleAuth.setup(container, application);
    }
});


// Routes
//App.Router = Ember.Router.extend();

App.Router.map(function() {
    this.route('protected');
    this.route('login');
});

App.ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin, {});

App.ProtectedRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {});

// Controllers
App.LoginController = Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin, {
    authenticatorFactory: 'authenticator:oauth2-password-grant'
});

