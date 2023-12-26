# Specify the paths to the source files and the destination file
$indexHtmlPath = "C:\Users\shaol\source\repos\rubiks_cube\index.html"
$concatenateHtmlPath = "C:\Users\shaol\source\repos\rubiks_cube\temp\conc.html"
$mainCssPath = "C:\Users\shaol\source\repos\rubiks_cube\src\main.css"
$mainJsPath = "C:\Users\shaol\source\repos\rubiks_cube\src\main.js"

# Task 1: Overwrite or create "concatenate.html" with the contents of "index.html"
if (Test-Path $concatenateHtmlPath) {
    # "concatenate.html" exists, so overwrite its contents
    Get-Content $indexHtmlPath | Set-Content $concatenateHtmlPath
} else {
    # "concatenate.html" doesn't exist, so create it and copy contents from "index.html"
    Copy-Item $indexHtmlPath $concatenateHtmlPath
}

# Task 2: Append the contents of "main.css" inside <style> tags in "concatenate.html"
(Get-Content $concatenateHtmlPath) | ForEach-Object {
    $_ -replace '</head>', ('<style>' + (Get-Content $mainCssPath -Raw) + '</style>' + '</head>')
} | Set-Content $concatenateHtmlPath

# Task 3: Replace the <script src="..."></script> line with the contents of "main.js"
(Get-Content $concatenateHtmlPath) | ForEach-Object {
    $_ -replace '<script src=".*?"></script>', "<script>$((Get-Content $mainJsPath -Raw) -replace '<', '&lt;')</script>"
} | Set-Content $concatenateHtmlPath
