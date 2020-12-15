while (true) {
    console.log("light level: " + input.lightLevel())
    if (input.lightLevel() > 7) {
        light.setAll(light.rgb(0, 0, 0))
    }
    
    if (7 > input.lightLevel() && input.lightLevel() >= 5) {
        light.setAll(light.rgb(255, 255, 0))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
