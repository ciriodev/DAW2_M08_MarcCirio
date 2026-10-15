# Chuleta Git

## Añadir archivos
```bash
git add archivo
```


## Commitear archivos
```bash
git commit -m "Mensaje de info del commit"
```

## Ver estado del git 
```bash
git status
```


## Mostrar cambios que no estan preparados
```bash
git diff

git diff --staged
```


## Mostrar historial de forma resumida
```bash
git log --oneline
```
## Mostrar historial de forma detallada
```bash
git log
```

## Mostrar detalles del ultimo commit
```bash
git show
```

## Sacar del Staging para que no suban al commit 
```bash
git restore --staged archivo
```
## EL CONTENIDO NO SE MACHACA, SIMPLEMENTE SE SALE DEL STAGE Y MANTIENE LOS CAMBIOS ACTUALES.


## Sacar algo commiteado (Repo Local)
 #### sacas el id del commit con el git log.
```bash
git restore --source idCommit archivo
```
### EL CONTENIDO SI SE MACHACA, EL CONTENIDO QUE TIENES EN EL REPO SERA EL CONTENIDO QUE TENDRÁS.

### EN CASO DE QUERER RECUPERAR EL STAGED AL HABERLA CAGADO EN EL DIRECTORIO DE TRABAJO HACER UN COMMIT Y RECUPERARLO DEL COMMIT.


## Eliminar ficheros del repositorio
```bash
git rm archivo
git commit -m "Eliminar archivo"
```


## Mover o Renombrar ficheros del repositorio
```bash
git mv archivo1 archivo2
git commit -m "Eliminar archivo"
```


## Archivos que no quieres que suba
```bash
.gitignore
```
#### Los archivos directamente se ignoran en cualquier paso de git.

