var app = new Vue({
  el: '#editTeam',
  data: {
    name: 'Preview',
  },
});

var app = new Vue({
  el: '#playerList',
  data: {
    players: [],
    playerName: '',
    position: '',
    show: 'all',
    drag: {},
  },
  methods: {
    addItem: function() {
      if(this.position !== '' && this.playerName !== '') {
        this.players.push({text: this.position + ' - ' + this.playerName});
      } else if (this.playerName !== '') {
        this.players.push({text: this.playerName});
      }
      
      this.playerName = '';
      this.position = '';
    },
    deleteItem: function(player) {
      var index = this.players.indexOf(player);
      if (index > -1)
    this.players.splice(index,1);
    },
    dragItem: function(player) {
      this.drag = player;
    },
    dropItem: function(player) {
      var indexItem = this.players.indexOf(this.drag);
      var indexTarget = this.players.indexOf(player);
      this.players.splice(indexItem,1);
      this.players.splice(indexTarget,0,this.drag);
    },
  }
});

$( document ).ready(function() {

    const fileInput = document.getElementById('img-file-input');

    fileInput.addEventListener('change', (e) =>  {

        var files = e.target.files;

        var show = $('#show-logo')
        var img = $('#loaded-logo');

        img.attr("src",window.URL.createObjectURL(files[0]));

    });

    $('#team-name').keyup(function() {
        $('#name-header').text($(this).val());
    });
    
});