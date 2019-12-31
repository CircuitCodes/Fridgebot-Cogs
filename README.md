# Fridgebot Cogs
A repository to host cogs for FridgeBot.

## Listing Guidelines
- Source **must** be public.
- **No malicious code** such as open evals, remote executions, etc etc.
- Filename must match the regular expression `(([a-zA-Z]*-)([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+)?)(-cog.jar)`, for example `specialCog-1.0.0-cog.jar`
- Jars must be in a folder inside the "cogs" folder. For example:
    ```
    - cogs
        - specialCog
            - specialCog-1.0.0-cog.jar
            - ...
    ```
- Have the following manifest values in the .jar file:
    - `X-Cog-Name`: Name of the cog.
    - `X-Cog-Version`: Cog's version
    - `X-Cog-Package-Name`: Cog's package name, where the cog classes are stored.
    - `X-Cog-Author`: The author/main developer's Discord ID.
- Source **must** be in Kotlin, as [the library](https://github.com/devoxin/flight) will not support Java cogs.

## How to list
- Open an issue, it'll be reviewed to meet the guidelines listed above.
- Once the source is reviewed, open a pull request, the .jar will also be reviewed.

## Cog repository
[coming soon]
