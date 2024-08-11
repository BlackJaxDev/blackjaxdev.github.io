---
sidebar_position: 4
---

# Translation

This button opens a window that allows you to localize all text within Jax VRC Tools into another language (or something silly, if you wanted).  
English is the only language currently provided by default. The currently selected language is displayed in bold at the top of the window.  
Your current operating system language is displayed right below that.  
In order to change the current language, select a new language in the "Display Language:" dropdown.  
In order to add a new language to localize yourself or load in from a json file, click "Add New Language" just below that.
  
The current display language you've selected can be saved to a json config file by clicking "Save" on the right.  
It can also be loaded from a json using the "Load" button.  
This means anyone can localize the tool and share the translation via json.  
  
Every string in the program is located in the tree hierarchy below, organized by namespaces.  
It might be confusing to follow the organization, so the best way to localize would be to start with English and translate each phrase in-place.  
You can also translate by editing the json file manually!