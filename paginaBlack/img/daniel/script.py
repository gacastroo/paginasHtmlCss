import os

carpeta = r"C:\Users\guill\Downloads\black-phantom-site (1)\black-phantom\img\daniel"

archivos = os.listdir(carpeta)

contador = 1

for archivo in archivos:
    if archivo.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
        extension = os.path.splitext(archivo)[1]
        nuevo_nombre = f"daniel_{contador}{extension}"
        
        ruta_vieja = os.path.join(carpeta, archivo)
        ruta_nueva = os.path.join(carpeta, nuevo_nombre)
        
        os.rename(ruta_vieja, ruta_nueva)
        contador += 1

print("Renombrado completado ✅")