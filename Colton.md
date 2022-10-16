# Changes that effect the Form

1. Roof Pitch options need to be hardcoded

2. Door right edge position needs to go away. Left edge position needs to say "Feet from left corner wall"

3. Overhead doors need to have drop down lists for height and width.

4. Personnel Door Needs 'Endwall 3' Added to walls dropdown

5. Overhead Door option for 'Roof' Removed

# Changes that effect the base type Project.ts

1. Type "FramedOpenings" .group doesn't go with the schema.

# Concerns

1. Windows.Width: Number, where the input is a string on the form.

2. Wall Alteration Group as a wall panel - Extension.

### Pretty Picture

                                  Endwall 3
      Left y0, y1  __________________________________(x=bWidth, y = bHeight)
                  |                                 |
                 ---                                |
                 ---                                |
                  |                                 |
                  |                                 |
        Sidewall 2|                                 | Sidewall 4
                  |                                 |
                  |                                 |
                  |                                 |
                  |                                 |
                  |                                 |
        (x=0,y=0) |                                 |
                  |_________________________________|Left y0, y1
                                  Endwall 1

# Algorithm on things that affect Position

Purlins

Girt

Rafter

Column

Panel

xPos
yPos
zPos
Length
Width
Height

"Framed Openings"
Column
!Panel

Wall
Girt
Column

Roof
Rafter
Panel
Purlins

Building
Wall
Roof
Framed Openings
