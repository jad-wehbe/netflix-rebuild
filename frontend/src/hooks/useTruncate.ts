const useTruncate = (str: string, n: number, enable: boolean): [string, boolean] => {
    if (str) {
        if (str.length > n)
            return !enable ? [str.substring(0, n - 1) + "...", true] : [str, true];
        return [str, false];
    }
    return ["No overview", false];
};

export { useTruncate };
