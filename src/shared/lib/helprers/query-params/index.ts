export const setQueryParams = (params: Record<string, any>) => {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([key, value]) => searchParams.set(key, String(value)));

    window.history.pushState(null, '', `?${searchParams}`);
};

interface ParsedUrl {
    protocol: string | null;
    hostname: string | null;
    port: string | null;
    path: string | null;
    query: { [key: string]: string };
    hash: string | null;
}

export const parseUrl = (urlString: string = window.location.href): ParsedUrl => {
    const url = new URL(urlString);

    const query: { [key: string]: string } = {};
    url.searchParams.forEach((value, key) => {
        query[key] = value;
    });

    return {
        protocol: url.protocol !== '' ? url.protocol.replace(':', '') : null,
        hostname: url.hostname !== '' ? url.hostname : null,
        port: url.port !== '' ? url.port : null,
        path: url.pathname !== '/' ? url.pathname : null,
        query,
        hash: url.hash !== '' ? url.hash.replace('#', '') : null,
    };
};
