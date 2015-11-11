import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['isEditing:editing'],
  classNames: ['list-group-item'],

  init() {
    this._super(...arguments);
    this.set('isEditing', false);
  },

  actions: {
    editActivity() {
      this.set('isEditing', true);
    },

    save(activity, title) {
      this.set('isEditing', false);

      activity.set('title', title);
      activity.save();
    }
  }
});
