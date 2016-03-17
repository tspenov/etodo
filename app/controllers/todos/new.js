import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addTodo: function(){
			// Get params
			var title = this.get('title');
			var date  = this.get('date');
			var body = this.get('body');

			// Create new todo
			var newTodo = this.store.createRecord('todo', {
				title: title,
				date: new Date(date),
				body: body
			});

			// Save to Firebase
			newTodo.save();

			// Clear form
			this.setProperties({
				title: '',
				body: '',
				date: ''
			});
		}
	}
});
