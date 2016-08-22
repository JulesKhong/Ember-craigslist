import Ember from 'ember';

export default Ember.Component.extend({

  formatDate: Ember.computed('listing.createdAt', function() {
    var stringDate = this.get('listing.createdAt');
    var t = stringDate.slice(0,10).split('-');
    var newDate = new Date(Number(t[0]),Number(t[1])-1,Number(t[2]));
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    var year = newDate.getFullYear();
    return (month + '/' + day + '/' + year);
    })
});
