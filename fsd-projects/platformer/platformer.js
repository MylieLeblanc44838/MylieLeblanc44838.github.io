$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0,200,150,20,"pink");
    createPlatform(0,500, 150, 20,"pink");
    createPlatform(150, 200 , 20, 100, "white");
    createPlatform(400, 500, 150, 20, "pink");
    createPlatform(300, 0, 20, 250, "white");
    createPlatform(650, 400, 150, 20, "pink");
    createPlatform(400, 300, 150, 20, "pink");
    createPlatform(650, 200, 150, 20, "pink");
    createPlatform(800, 200, 20, 550, "white");
    createPlatform(820, 300, 150, 20, "pink");
    createPlatform(820, 600, 150, 20, "pink");
    createPlatform(970, 300, 20, 100, "white");
    createPlatform(1100, 0, 20, 400, "white");
    createPlatform(1100,600, 150,20, "pink");
    createPlatform(1250, 500, 150, 20, "pink");
    createPlatform(1100, 400, 150, 20, "pink");
    createPlatform(1250, 300, 150, 20, "pink");
  




    // TODO 3 - Create Collectables
    createCollectable("database", 200,300);
    createCollectable("database",720, 160);
    createCollectable("database", 1300, 260);



    
    // TODO 4 - Create Cannons
    createCannon("bottom", 700,700);
    createCannon("right", 100, 700);
    createCannon("bottom", 1300, 700);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
