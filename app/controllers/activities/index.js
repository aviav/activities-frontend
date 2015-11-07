export default Ember.Controller.extend({
  actions: {
    createActivity: function() {
      // Get the activity title set by the "New Activity" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Activity model
      var activity = this.store.createRecord('activity', {
        title: title
      });

      // Clear the "New Activity" text field
      this.set('newTitle', '');

      // Save the new model
      activity.save();
    }
  }
});
