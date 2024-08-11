---
sidebar_position: 8
---

# Helpers

This menu button has several submenus that provide general helpful Unity functionality.  
  
- Active Scene: operates on all GameObjects only in the main active scene.
- All Loaded Scenes: operates on all GameObjects in every loaded scene.
- Project: operates on all project assets (probably overkill)
- Selection: operates on the currently selected GameObject.

Each submenu has the same helper buttons:  
- Missing Scripts: for all GameObjects that have missing component scripts,
  - Delete: Deletes them all. This operation is undoable.
  - Select: Selects them all.
- Revert Transform Overrides: restores all transforms back to default (no overrides from prefab).