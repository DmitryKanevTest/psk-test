<template>
    <button class="buttonFilter">
        Фильтры
        <svg class="buttonFilter__svg" viewBox="0 0 512 512">
            <path d="M472,168H40a24,24,0,0,1,0-48H472a24,24,0,0,1,0,48Z" />
            <path d="M392,280H120a24,24,0,0,1,0-48H392a24,24,0,0,1,0,48Z" />
            <path d="M296,392H216a24,24,0,0,1,0-48h80a24,24,0,0,1,0,48Z" />
        </svg>
    </button>
</template>

<style lang="scss">
.buttonFilter {
    width: 120px;
    text-align: left;
    font-weight: bold;
    padding: 10px;
    position: relative;
    background: none;
    color: $cBackgroundMain;
    border: 1px solid $cBackgroundMain;
    border-radius: 10px;
    transition: all 0.2s;

    &:hover {
        background-color: $cBackgroundMain;
        color: $cBackgroundBar;

        path {
            fill: $cBackgroundBar;
        }
    }
}

.buttonFilter__svg {
    height: 25px;
    position: absolute;
    top: 6px;
    right: 15px;

    path {
        fill: $cBackgroundMain;
    }
}
</style>
