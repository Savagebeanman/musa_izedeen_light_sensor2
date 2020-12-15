while True:
    print("light level: " + input.light_level())
    if input.light_level() >7:
        light.set_all(light.rgb(0,0,0))
    if 7>input.light_level() >=5:
        light.set_all(light.rgb(255,255,0))
    else:
        light.set_all(light.rgb(0,0,255))