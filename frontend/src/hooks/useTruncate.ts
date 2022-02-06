const useTruncate = (str: string, n: number, enable: boolean): string => {
    if (str) {
        if (str.length > n && !enable) return str.substring(0, n - 1) + "...";
        return str;
    }
    return "No overview";
};

export { useTruncate };
