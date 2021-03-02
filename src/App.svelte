<script>
    let input = {
        width: 0,
        height: 0,
        aspectratio: ""
    }

    let output = {
        width: 0,
        height: 0
    }

    $: aspectRatio = calculateAspectRatio(input.width, input.height)

    const greatestCommonDivisor = (a, b) => {
        if (!b) {
            return a
        }
        return greatestCommonDivisor(b, a % b)
    }

    const calculateAspectRatio = (width, height) => {
        const divisor = greatestCommonDivisor(input.width, input.height)

        return {
            width: width / divisor,
            height: height / divisor
        }
    }

    const processOutputWidthChange = (event) => {
        const width = parseInt(event.target.value)
        if (!width) {
            return
        }
        output.height = width / aspectRatio.width * aspectRatio.height
    }

    const processOutputHeightChange = (event) => {
        const height = parseInt(event.target.value)
        if (!height) {
            return
        }
        output.width = height / aspectRatio.height * aspectRatio.width
    }

    const processInputAspectRatio = (event) => {
        let aspectRatioValues = event.target.value.split(":")
        input.width = parseInt(aspectRatioValues[0])
        input.height = parseInt(aspectRatioValues[1])
    }


</script>

<main>
    <div class="container mx-auto">
        <div class="grid grid-flow-col grid-cols-2 gap-8">
            <div class="col">
                <h2 class="font-bold text-xl">Input</h2>
                <div class="field mt-4">
                    <label for="input[width]" class="font-bold cursor-pointer">Width</label>
                    <input type="number"
                           name="input[width]"
                           id="input[width]"
                           class="text-gray-800 dark:bg-gray-600 dark:text-gray-300 border-0 p-2 w-full"
                           bind:value={input.width}>
                </div>
                <div class="field mt-4">
                    <label for="input[height]" class="font-bold cursor-pointer">Height</label>
                    <input type="number"
                           name="input[height]"
                           id="input[height]"
                           class="text-gray-800 dark:bg-gray-600 dark:text-gray-300 border-0 p-2 w-full"
                           bind:value={input.height}>
                </div>
            </div>
            <div class="col">
                <h2 class="font-bold text-xl">Output</h2>
                <div class="field mt-4">
                    <label for="output[width]" class="font-bold cursor-pointer">Width</label>
                    <input type="number"
                           name="output[width]"
                           id="output[width]"
                           class="text-gray-800 dark:bg-gray-600 dark:text-gray-300 border-0 p-2 w-full"
                           bind:value={output.width}
                           on:change={processOutputWidthChange}>
                </div>

                <div class="field mt-4">
                    <label for="output[height]" class="font-bold cursor-pointer">Height</label>
                    <input type="number"
                           name="output[height]"
                           id="output[height]"
                           class="text-gray-800 dark:bg-gray-600 dark:text-gray-300 border-0 p-2 w-full"
                           bind:value={output.height}
                           on:change={processOutputHeightChange}>
                </div>
            </div>
        </div>
        <div class="w-full mt-4 bg-gray-900 p-4 text-center">
            <h2 class="font-bold text-xl">Aspect-Ratio</h2>
            <span class="aspect-ratio">{aspectRatio.width | 0}:{aspectRatio.height | 0}</span>
            <div class="field mt-4">
                <label for="input[aspectratio]" class="font-bold cursor-pointer">Typical Aspect-Ratios</label>
                <select name="input[aspectratio]" id="input[aspectratio]" bind:value={input.aspectratio}
                        on:change={processInputAspectRatio}>
                    <option value=""></option>
                    <option value="1:1">1:1 (square)</option>
                    <option value="4:3">4:3</option>
                    <option value="3:4">3:4</option>
                    <option value="16:10">16:10</option>
                    <option value="16:9">16:9</option>
                </select>
            </div>
        </div>
    </div>
</main>