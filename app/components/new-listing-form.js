import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveListing() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        text: this.get('text') ? this.get('text') : "",
        image: this.get('image') ? this.get('image') : "",
        category: this.get('category'),
        createdAt: new Date()
      };
      this.sendAction('saveListing', params);
    }
  }
});
