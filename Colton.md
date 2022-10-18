# Changes

1. Roof Pitch options need to be hardcoded

2. Door right edge position needs to go away. Left edge position needs to say "Feet from left corner wall"

3. Overhead doors need to have drop down lists for height and width.

4. Personnel Door Needs 'Endwall 3' Added to walls dropdown

5. "Expandable Endwall" Not Expendable. See the main Type, and the form.

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

# TODO List

1. Screws
2. Extensions
3. Overhangs
4. Liner Panels
5. Wainscoting
6. Soffit
7. Trim
8. Gutters
9. Downspouts
10. Other Additional Options

# Current State
The Positions (x,y,z) and Lengths (xLen,yWid,zHei) of all Purlins, Girts, Panels, Columns and Rafters have been generated. The Roof Panel Generation needs work. Need to refactor everything. At least it is looking like a complete version of this will be less than 2k lines of code. Fuck VBA and that 100k line of code shit.