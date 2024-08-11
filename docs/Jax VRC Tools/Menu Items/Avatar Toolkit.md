---
sidebar_position: 7
---

# Avatar Toolkit

This is the main avatar management toolkit window! This toolkit keeps track of everything avatar related for you.  
  
At the top, you select which avatar you want to focus on via the dropdown. Avatars are determined by a GameObject being at the root of the scene (top level, no parent GameObject) and containing an animator component. To the right of the dropdown, you can click the "?" button to show various toggles to narrow down the list of avatars to select from:
- Show Inactive: when this is on, avatar GameObjects that are not currently active will still show in the list.
- Show Non-Projects: when this is on, avatars that have not had a JVRCT settings project generated for them will still be shown in the list.
- Show Non-Humanoids: when this is on, avatars imported as Generic or otherwise not as Humanoid will still show in the list.
  
After selecting the avatar you want to edit, there's 4 main sections to help you edit it:
- Warnings: This section analyzes your avatar continously over time while you edit and verifies it has no known issues. This section must be open to analyze.
- Settings: This section contains settings specific to the avatar.
- Menus: This section is only visible when editing a VRChat avatar (the GameObject must contain a VRC Avatar Descriptor component). It displays the avatar's root menu as a neat tree hierarchy, or as a more in-game accurate radial menu.
- Model: This section contains sections pertaining to visualizing and editing aspects of the avatar model, such as components, textures, meshes, VRChat stats, etc.