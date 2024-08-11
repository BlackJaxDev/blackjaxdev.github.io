---
sidebar_position: 2
---

# Preferred Light Probe Anchor Human Bone  
  
This is the GameObject that will be set to all SkinnedMeshRenderers when synchronizing light probe anchors. Light probe anchors on meshes should all be set to the same GameObject on avatars in order for lighting to look consistent. Its recommended for this to be set to the chest bone, which will likely always be above surfaces even when prone, where light sources can see it.  
  
When checked on, a drop down containing humanoid bones only will show to the right. This will use the Humanoid configuration to find the target GameObject to use. When checked off, you need to manually type in a GameObject path to the target.