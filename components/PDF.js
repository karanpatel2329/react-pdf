import {Document,Page,View,Text,PDFViewer, PDFDownloadLink} from '@react-pdf/renderer'

export default ({value}) => {

    return <>
    <PDFViewer>
    <Document>
            <Page>
                <View>
                    <Text>
                    {value}
                    </Text>
                </View>
            </Page>
        </Document>
    </PDFViewer>
    <br/><br/>
    <PDFDownloadLink document={
        <Document>
        <Page>
            <View>
                <Text>
                {value}
                </Text>
            </View>
        </Page>
    </Document>
    } fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
    </>
}