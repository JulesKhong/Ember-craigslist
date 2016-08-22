import Ember from 'ember';

export default Ember.Component.extend({
  newListingForm: false,
  actions: {
    updateNewListingForm(){
      this.set('newListingForm', true);
    },
    saveListing() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        text: this.get('text') ? this.get('text') : "",
        image: this.get('image') ? this.get('image') : "",
        category: this.get('category'),
        price: parseInt(this.get('price')),
        createdAt: new Date()
      };
      this.set('newListingForm', false);
      this.sendAction('saveListing', params);
    }
  }
});
