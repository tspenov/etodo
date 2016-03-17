import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		editTodo: function(id){
			var self = this;
			// Get params
			var title = this.get('model.title');
			var date  = this.get('model.date');
			var body = this.get('model.body');

			this.store.findRecord('todo', id).then(function(todo){
				todo.set('title', title);
				todo.set('date', new Date(date));
				todo.set('body', body);

				todo.save();

				self.transitionToRoute('todos');
			});

		},

		deleteTodo: function(id){
			var self = this;

			this.store.findRecord('todo', id).then(function(todo){
				todo.deleteRecord();
				todo.save();

				self.transitionToRoute('todos');
			});

		}
	}
});
