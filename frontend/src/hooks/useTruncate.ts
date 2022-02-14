const useTruncate = (str: string, n: number, enable: boolean): [string, boolean] => {
    if (str) {
        if (str.length > n && !enable) return [str.substring(0, n - 1) + "...", true];
        return [str, false];
    }
    return ["No overview", false];
};

export { useTruncate };
