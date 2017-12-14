import htmlElementSize from 'html-element-size';

const HtmlElementWidthMixin = {
    stateElementWidth(stateProperty, element, options) {
        if (element) {
            this.setState({
                [`${stateProperty}`]: htmlElementSize(element, options || {}).width
            });
        }
        else {
            this.setState({
                [`${stateProperty}`]: null
            });
        }
    }
};

export default HtmlElementWidthMixin;
