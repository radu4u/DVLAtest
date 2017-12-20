package data.tests;

import data.operations.FilesDataStore;
import data.operations.ReadFiles;
import framework.CarDataStructure;
import framework.FilesOperations;
import org.testng.annotations.Test;

import java.util.ArrayList;
import java.util.List;



public class FilesDataStoreTest {

    @Test
    public void testSomething () {
        ReadFiles readFiles = new ReadFiles();
        List<FilesDataStore> filesDetails = readFiles.readFilesDetailsFromPath("src/main/resources/carsDataFiles");

        //assertThat(filesDetails, is(5));
        // need hamcrest
        for(int i =0; i < filesDetails.size(); i++ ){
            System.out.println(filesDetails.get(i).getFileExtension() + filesDetails.get(i).getMimeType());
        }
        assertTrue(filesDetails != null);
        assertTrue(filesDetails.size() != 0);
    }


    @Test
    public void readCarDetailsFromExcellFile() {
        ReadFiles readFiles = new ReadFiles();
        List<FilesDataStore> filesDetails = readFiles.readFilesDetailsFromPath("src/main/resources");
        List<CarDataStructure> carsData = new ArrayList<>();
        for(int i =0; i < filesDetails.size(); i++ ) {
            if(filesDetails.get(i).getFileExtension().contains("xlsx")) {
                FilesOperations fo = new FilesOperations();
                carsData =(fo.getCarsDetailsFromExcellFile(filesDetails.get(i).getFilePath()));
            }
        }
        for(int i = 0; i < carsData.size(); i++) {
            System.out.println(carsData.get(i).getRegistrationNumber());
            System.out.println(carsData.get(i).getColour());
            System.out.println(carsData.get(i).getMake());
        }
    }


    @Test
    public void filterFilesDetails() {
        ReadFiles rf = new ReadFiles();
        List<FilesDataStore> carsData = rf.getFilesDetailsByMimeType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "src/main/resources");
        for(int i = 0; i < carsData.size(); i++) {
            System.out.println(carsData.get(i).getFileExtension());
            System.out.println(carsData.get(i).getFilePath());
            System.out.println(carsData.get(i).getMimeType());
            System.out.println(carsData.get(i).getFileByteSize());
            System.out.println(carsData.get(i).getFileName());
        }
    }
}
