const Map = () => {
    return (
        <div style={{marginTop: '60px', border: 'none', borderRadius: '30px', overflow: 'hidden'}}>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Acb93f01f8507cc536cff9e6f372f05dbeba2dab5015f5c374ff680408d62df4a"
                width="100%"
                height="423"
                frameBorder={0 as unknown as undefined}
                title="Yandex Map"
            />
        </div>
    )
}

export default Map