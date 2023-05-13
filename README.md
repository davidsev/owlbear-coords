# AoE Shapes

An [Owlbear Rodeo](https://www.owlbear.app/) extension to show the coordinates of the mouse.

Intended for extension developers to help debug geometry calculation etc.

## Installation

1. Go to the [Owlbear Rodeo BETA](https://www.owlbear.app/) and click "Add Extension" at the bottom of your profile
2. Add the url `https://owlbear-coords.davidsev.co.uk/manifest.json`
3. In your room click the `...` menu at the bottom left, and select "Extensions" to enable it

## Usage

Select the coords icon in the toolbar on the right, and a popup will appear by your cursor.

It only works when the tool is selected due to how owlbear extensions work.

It also takes a few seconds to vanish when you change tool, as there's no "tool deselected" event, so I have to just
assume a few seconds of inactivity means you've changed tool.


