import Ember from 'ember';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({
  store: service(),

  actions: {
    createActivity(title) {
      let store = this.get('store');

      if (!title.trim()) { return; }

      // Create the new Activity model
      var activity = store.createRecord('activity', {
        title: title
      });

      // Clear the "New Activity" text field
      this.set('newTitle', '');

      // Save the new model
      activity.save();
    }
  }
});
