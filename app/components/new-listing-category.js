import Ember from 'ember';

export default Ember.Component.extend({
  categoryShow: false,
  actions: {
    updateCategoryShow() {
      this.set('categoryShow', true);
    }
  }
});
