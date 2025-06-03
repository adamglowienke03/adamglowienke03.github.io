import os
import json

def walk_directory(path, root_rel_path=""):
    items = []
    for entry in sorted(os.listdir(path)):
        if entry.startswith("."):
            continue

        full_path = os.path.join(path, entry)
        rel_path = os.path.join(root_rel_path, entry).replace("\\", "/")

        if os.path.isdir(full_path):
            items.append({
                "name": entry,
                "type": "directory",
                "children": walk_directory(full_path, rel_path)
            })
        else:
            items.append({
                "name": entry,
                "type": "file",
                "path": rel_path
            })
    return items

ROOT_DIR = "./Kurs/"

structure = walk_directory(ROOT_DIR)

with open("files.json", "w", encoding="utf-8") as f:
    json.dump(structure, f, indent=2, ensure_ascii=False)

print("✅ Plik files.json został wygenerowany.")
