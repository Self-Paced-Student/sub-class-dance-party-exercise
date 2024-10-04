
$(() => {
  const $stage = $('#stage');
  const $regularBtn = $('#regular');
  const $tapperBtn = $('#tapper');
  const $rainbowBtn = $('#rainbow');

  function Dancer (top, left) {
    const dancer = {};
    // Here we use jQuery to create an HTML <div> tag.
    dancer.$node = $('<div class="dancer"></div>');
    Object.assign(dancer, dancerMethods);
    // Now that the dancer object has access to its methods,
    // we can set its position to the desired coordinates.
    dancer.setPosition(top, left);
    return dancer;
  }

  function Tapper (top, left) {
    const dancer = Dancer(top, left);
    window.setInterval(() => dancer.$node.toggleClass('tap-dancer'), 500);
    return dancer;
  }

  function Rainbow (top, left) {
    const dancer = Dancer(top, left);
    dancer.$node.addClass('rainbow');
    return dancer;
  }

  const dancerMethods = {};

  dancerMethods.setPosition = function (top, left) {
    // Here we use the CSS top and left properties to position our dancer
    // where it belongs on the page. See http://api.jquery.com/css/
    this.$node.css({top, left});
  };

  // Have a look at the last function in this file and figure out how to
  // make the regular dancers appear on stage. Then come back here
  // and continue with the TapDancer constructor.

  function randomStagePosition () {
    // Implement this function so that it returns an array with
    // the height and width coordinates of a random point on stage,
    // measured as the distance in pixels from its top-left corner.
    // Then use it every time you want to place a new dancer on stage.
    
    return {
      height: Math.round($stage.height() * Math.random()),
      width: Math.round($stage.width() * Math.random())
    }
  }

  function appendDancer (dancer) {
    $stage.append(dancer.$node)
  }

 

  $regularBtn.click(() => {
    const { width, height } = randomStagePosition();
    appendDancer(Dancer(height, width));
  });

  $tapperBtn.click(() => {
    const { width, height } = randomStagePosition();
    appendDancer(Tapper(height, width))
  })

  $rainbowBtn.click(() => {
    const { width, height } = randomStagePosition();
    appendDancer(Rainbow(height, width))
  })


});
